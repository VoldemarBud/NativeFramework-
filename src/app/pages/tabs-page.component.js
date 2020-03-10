import { WFMConponent } from "frame";
import { $ } from "../../frame/tools/dom";

class TabsPageComponent extends WFMConponent {
  constructor(config) {
    super(config);
  }

  events() {
    return {
      "click .collapsible": "onTabClick"
    };
  }

  onTabClick({ target }) {
    let $target = $(target);
    if (!$target.hasClass("collapsible-header")) return;

    this.el.findAll(".js_tab").forEach(element => {
      element.removeClass("active");
    });

    $target.parent().addClass("active");
  }
}

export const tabsPageComponent = new TabsPageComponent({
  selector: "app-tabs-page",
  template: `
  <div class="row mt150">
		<div class="col s10 offset-s1">
			<ul class="collapsible popout">
				<li class="js_tab">
					<div class="collapsible-header" tabindex="0">
						<i class="material-icons">filter_drama</i>First</div>
					<div class="collapsible-body">
						<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat.</span>
					</div>
				</li>
				<li class="js_tab">
					<div class="collapsible-header" tabindex="0">
						<i class="material-icons">place</i>Second</div>
					<div class="collapsible-body">
						<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat.</span>
					</div>
				</li>
				<li class="js_tab">
					<div class="collapsible-header" tabindex="0">
						<i class="material-icons">whatshot</i>Third</div>
					<div class="collapsible-body">
						<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat.</span>
					</div>
				</li>
			</ul>
		</div>
  </div>
`,
  styles: `
	.collapsible li.active .collapsible-body {
		display: block;
	}
	.mt150{
		margin-top: 150px
	}
`
});
