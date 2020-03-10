import { WFMConponent } from "frame";

class PipePageComponent extends WFMConponent {
  constructor(config) {
    super(config);

    this.data = {
      number: 10
    };
  }
}

export const pipePageComponent = new PipePageComponent({
  selector: "app-pipe-page",
  template: `
	<div class="row">
		<div class="col s6 offset-s4 pipe_wrapper" >
			<h4>{{number}}</h4>
			<h4>{{number | multi}}</h4>
			<h4>{{number | multi:5}}</h4>
			<h4>{{number | multi:15}}</h4>
		</div>
	</div>
`,
  styles: `
  .pipe_wrapper{
		margin-top:50px
	}
`
});
