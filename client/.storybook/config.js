import { configure } from '@kadira/storybook';

function loadStories() {
    const sample = require('../stories/sample');
    // require as many stories as you need.
}

configure(loadStories, module);