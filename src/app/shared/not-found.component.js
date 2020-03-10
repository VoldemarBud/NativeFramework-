import { WFMConponent } from "frame";

class NotFound extends WFMConponent {
  constructor(config) {
    super(config);
  }
}

export const notFound = new NotFound({
  selector: "app-not-found",
  template: `
	<div class='err_wrapper'>
		<div class='text_center'>
			<h1> 404 </h1>
			<h2 class=" red accent-3 text_white" >Page not a found</h2>
			<a href="#">Go main page</a>
		</div>
	</div>
  `,
  styles: `
	.err_wrapper{
		display:flex; 
		justify-content: center; 
		align-items:center;
		margin-top: 10%;
	}
	.text_center{
		text-align:center
	}
	.text_white{
		color: white
	}
`
});
