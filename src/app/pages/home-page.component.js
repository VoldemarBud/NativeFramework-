import { WFMConponent, router, http, _ } from "frame";

class HomePageComponent extends WFMConponent {
  constructor(config) {
    super(config);

    this.data = {
      title: "Main page work!!",
      linkTitle: "Next page",
      description: "In that moment don't have funcional",
      ip: "Loading . . ."
    };
  }

  events() {
    return {
      "click .js_next_link": "goToTabs"
    };
  }

  onInit() {}

  afterInit() {
    http
      .get("https://api6.ipify.org/?format=json")
      .then(({ ip }) => {
        _.delay(1500).then(() => {
          this.data.ip = ip;
          this.render();
        });
      })
      .catch(e => {
        throw new Error(e);
      });
  }

  goToTabs(event) {
    event.preventDefault();
    router.navigate("tabs");
  }
}

export const homePageComponent = new HomePageComponent({
  selector: "app-home-page",
  template: `
			<div class="row">
				<div class="col s6 offset-s3 card_wrapper" >
					<div class="card blue-grey darken-1">
						<div class="card-content white-text">
							<span class="card-title">{{title}}</span>
							<p>{{description}}</p>
							<p>{{ip}}</p>
						</div>
						<div class="card-action">
							<a href="#only-tabs" class="js_next_link">{{linkTitle}}</a>
						</div>
					</div>
				</div>
			</div>
`,
  styles: `
		.card_wrapper{
			margin-top:50px
		}
`
});
