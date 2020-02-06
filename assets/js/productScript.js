//Tableau Embed function
function initViz() {
	url = "https://eu-west-1a.online.tableau.com/t/epita/views/CoronavirusdistributionmapinChina/Sheet1?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link",
  options = {
      hideToolbar: true,
      width: "100%",
      height: "500px",
  };
  viz = new tableau.Viz(tabProduct, url, options);
}
