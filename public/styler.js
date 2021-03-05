/**
 * Overwrite styles
 */
((d) => {
    const root = d.body;
    const style = getComputedStyle(root);
    const config = new URLSearchParams(window.location.search);
    if(['false', '0'].includes(config.get('title'))){
        root.classList.add('no-title');
    }
    if(window.parent !== window.top){
        root.classList.add('no-repo');
    }
    config.forEach((value, key) => {
        if(typeof style.getPropertyValue(key) !== 'undefined'){
            root.style[key] = value;
        }
    })
})(document)
