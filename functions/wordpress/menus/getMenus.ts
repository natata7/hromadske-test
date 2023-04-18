import filterMenusByLocation from "./filterMenusByLocation";
import menuLocations from "@/lib/wordpress/_config/menuLocations";

export default function getMenus(
  menus: { nodes?: [] } | undefined,
  locations: string[] = menuLocations
) {
  if (locations.length === 0) {
    return []; // Exit if empty.
  }

  // Filter returned menus by specific menu location.
  const filteredMenus = filterMenusByLocation(menus?.nodes, locations);

  // assert non-null return value
  return filteredMenus || {};
}
