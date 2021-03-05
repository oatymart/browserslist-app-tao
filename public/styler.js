/**
 * Overwrite styles
 */
((d) => {
    const root = d.body;
    const style = getComputedStyle(root);
    const config = new URLSearchParams(window.location.search);
    console.log(config.has('title'), ['true', '1'].includes(config.get('title')))
    if(['false', '0'].includes(config.get('title'))){
        root.parentElement.classList.add('no-title');
    }
    config.forEach((value, key) => {
        if(typeof style.getPropertyValue(key) !== 'undefined'){
            root.style[key] = value;
        }
    })
})(document)
