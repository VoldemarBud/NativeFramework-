import { WFMConponent } from "frame";

class AppHeader extends WFMConponent {
  constructor(config) {
    super(config);
  }
}

export const appHeader = new AppHeader({
  selector: "app-header",
  template: `
   <nav class="deep-purple darken-2" style="padding-left: 20px; padding-right:20px">
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Native Framework</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
   
		  <li><a href="#">Home</a></li>
		  <li><a href="#tabs">Tabs</a></li>
		  <li><a href="#directive">Directive</a></li>
		  <li><a href="#pipe">Pipe</a></li>
		  <li><a href="#fake">404 page</a></li>
      </ul>
    </div>
  </nav>
  `
});
