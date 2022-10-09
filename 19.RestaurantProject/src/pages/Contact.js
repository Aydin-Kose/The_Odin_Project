export default function createContactPage(){
    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container");
    contactContainer.innerHTML = String.raw
    `<p>📞 123 456 789</p>
    <p>🏠 Küçükbakkalköy, Dudullu Cd. 23-25, 34758 Ataşehir/İstanbul</p>
    <div class="mapouter">
        <div class="gmap_canvas">
            <iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Brandium Avm&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div><style>.mapouter{position:relative;text-align:right;width:600px;height:400px;}.gmap_canvas {overflow:hidden;background:none!important;width:600px;height:400px;}.gmap_iframe {width:600px!important;height:400px!important;}</style></div>`
    return contactContainer;
}