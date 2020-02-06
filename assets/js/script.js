//Tableau Embed function
function initViz() {
	url = "https://eu-west-1a.online.tableau.com/t/epita/views/CoronaVirusGlobalcaseMap/Sheet1?:origin=card_share_link&:embed=n",
  options = {
      hideToolbar: true,
      width: "100%",
      height: "460px",
  };
	viz = new tableau.Viz(tabGlobal, url, options);
}
