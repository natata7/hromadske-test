/**
 * @returns formatted submission data as per the gravity form schema.
 * since the submitted values from antd-form don't match the required payload,
 * we need to do some extra processing to convert that data into the required field values.
 * Docs (https://github.com/harness-software/wp-graphql-gravity-forms/blob/develop/docs/submitting-forms.md) referring
 * to submission schema required for different field types
 */
// @TODO: Add types for values and formData
export const processGfFieldValues = (values: any, formData: any) => {
  const fields = formData?.formFields?.edges;

  if (!(fields.length > 0)) {
    return null;
  }

  // Format the field values as per the required gravity form submission schema
  const fieldValues: {
    id: number | string;
    // @TODO: Add type for values
    value?: any;
    checkboxValues?: {
      inputId: string | number;
      value: string | number;
    };
  }[] = Object.keys(values).map((key, index) => {
    const value = values[key];
    return {
      id: parseInt(key.replaceAll("field-", "")),
      value: value.toString(),
    };
  });

  const formFields = formData.formFields.edges;
  formFields.forEach(
    (formField: {
      node: {
        // @TODO: Add type for inputs
        inputs?: any;
        // @TODO: Add type for checkBoxChoices
        checkboxChoices?: any;
        type?: string;
        id?: string | number;
      };
    }) => {
      const { type, id } = formField.node;

      // Determine checkbox input IDs based on available data.
      if (type === "CHECKBOX") {
        const filteredValue = fieldValues.find(
          (fielValue) => fielValue.id === id
        );

        if (filteredValue) {
          const filteredValueIndex = fieldValues.indexOf(filteredValue);
          const selectedValues = filteredValue.value.split(",");
          const checkboxInputs = formField.node.inputs;
          const checkboxChoices = formField.node.checkboxChoices;

          // filter out the selected choices from the checkboxChoices array.
          // This will give us an array filteredChoices that contains only the choices that are selected by the user.
          const filteredChoices = checkboxChoices.filter(
            (checkboxChoice: { value: unknown }) =>
              selectedValues.includes(checkboxChoice.value)
          );

          // Filter out the input elements that correspond to the selected choices.
          // This will give us an array filteredInputs that contains only the input elements that correspond to the selected choices.
          const filteredInputs = checkboxInputs.filter(
            (checkboxInput: { label: string }) =>
              filteredChoices.some(
                (filteredChoice: { text: string }) =>
                  filteredChoice.text === checkboxInput.label
              )
          );
          // Create a mapping between the text property and the value property of the elements in filteredChoices.
          // This will give us an object filteredChoicesMap that maps the text property to the corresponding value property.
          const filteredChoicesMap = filteredChoices.reduce(
            (
              map: { [x: string]: any },
              choice: { text: string | number; value: any }
            ) => {
              map[choice.text] = choice.value;
              return map;
            },
            {}
          );

          // Finally, we create a new array filteredInputsMap as per the gravity form submission schema
          const filteredInputsMap = filteredInputs.map(
            (input: { id: number | string; label: string | number }) => {
              return {
                inputId: parseFloat(input.id.toString()),
                value: filteredChoicesMap[input.label],
              };
            }
          );

          if (id) {
            fieldValues[filteredValueIndex] = {
              id: id,
              checkboxValues: filteredInputsMap,
            };
          }
        }
      }
    }
  );

  return fieldValues;
};
