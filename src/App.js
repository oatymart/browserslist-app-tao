import './App.css';
import browserCodeTransformer from './constants/browsers.js';
import browserslist from 'browserslist';
import oatBrowserListConfig from '@oat-sa/browserslist-config-tao';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

function App() {
    const supportedBrowsers = browserslist(oatBrowserListConfig);

    const groupBrowsers = () => {
        return supportedBrowsers.reduce((list, browser) => {
            const key = browser.split(' ')[0];
            const version = browser.split(' ')[1];

            if (!list[key]) {
                list[key] = version;
            } else {
                list[key] = list[key] + ', ' + version;
            }

            return list;
        }, {});
    };

    const render = () => {
        const supportedBrowsers = groupBrowsers();

        return Object.entries(supportedBrowsers).map(([browser, version]) => (
            <li className="browser" key={browser}>
                <FontAwesomeIcon icon={['fab', browserCodeTransformer[browser]]} size="6x" />
                {browser.indexOf('and_ff') > -1 ? (
                    <h2>Android Firefox</h2>
                ) : browser.indexOf('and_chr') > -1 ? (
                    <h2>Android Chrome</h2>
                ) : browser.indexOf('ios_saf') > -1 ? (
                    <h2>iOS Safari</h2>
                ) : browser.indexOf('ie') > -1 ? (
                    <h2>Internet Explorer</h2>
                ) : (
                    <h2 className="capitalize">{browser}</h2>
                )}

                <p className="subheading">Supported Versions</p>
                <span className="strong version">{version}</span>
            </li>
        ));
    };

    return (
        <div className="app">
            <h1 className="title">Browsers supported by TAO</h1>
            <ul className="browsers">{render()}</ul>
        </div>
    );
}

export default App;
