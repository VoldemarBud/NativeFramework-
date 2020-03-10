import { WFMConponent } from "frame";

class AppComponent extends WFMConponent {
  constructor(config) {
    super(config);
  }
}

export const appComponent = new AppComponent({
  selector: "app-root",
  template: `
  <app-header></app-header>

  <router-outlet></router-outlet>
`
});
