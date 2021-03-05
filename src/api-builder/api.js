import getBrowserListing from '../data-provider/browsers.js';
import fs from 'fs';

/**
 * Build the JSON file
 */
const buildApi = (() => {
    try {
        const apiJson = `${process.cwd()}/public/api.json`;
        const data = JSON.stringify(getBrowserListing());
        fs.writeFileSync(apiJson, data, {
            encoding: 'utf8'
        });
    } catch (e) {
        console.log(e);
    }
})();

export default buildApi;
