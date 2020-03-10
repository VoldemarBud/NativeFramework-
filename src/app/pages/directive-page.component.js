import { WFMConponent } from "frame";

class DirectivePageComponent extends WFMConponent {
  constructor(config) {
    super(config);
  }
}

export const directivePageComponent = new DirectivePageComponent({
  selector: "app-directive-page",
  template: `
	<div class="row">
		<div class="col s6 offset-s4 directive_wrapper" >
			<h3 appHover="red">Hover to me</h3>
		</div>
	</div>
`,
  styles: `
  .directive_wrapper{
	margin-top:50px
	}
`
});
