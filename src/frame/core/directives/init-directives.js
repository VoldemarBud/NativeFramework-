import { _ } from "../../tools/util";

export function initDirectives(directives) {
  if (_.isUndefined(directives)) return;

  directives.forEach(element => element.init());
}
