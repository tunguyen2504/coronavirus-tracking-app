//Tableau Embed function
function initViz() {
	url = "https://public.tableau.com/views/ChinadistributionofnCoV/Sheet1?:display_count=y&:origin=viz_share_link",
  options = {
      hideToolbar: true,
      width: "100%",
      height: "460px",
  };
  viz = new tableau.Viz(tabProduct, url, options);
}
