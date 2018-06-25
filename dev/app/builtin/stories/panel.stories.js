/* eslint-disable import/default */

import { storiesOf } from 'dev-novel';
import instantsearch from '../../../../index';
import { wrapWithHits } from '../../utils/wrap-with-hits.js';

const stories = storiesOf('Panel');

export default () => {
  stories
    .add(
      'default',
      wrapWithHits(container => {
        const statsWithPanel = instantsearch.wrappers.panel({
          templates: {
            header: 'Header!',
          },
        })(instantsearch.widgets.stats);

        window.search.addWidget(
          statsWithPanel({
            container,
          })
        );
      })
    )
    .add(
      'collapsible',
      wrapWithHits(container => {
        const refinemenListWithPanel = instantsearch.wrappers.panel({
          templates: {
            header: 'Header!',
          },
        })(instantsearch.widgets.refinementList);

        window.search.addWidget(
          refinemenListWithPanel({
            container,
            attributeName: 'brand',
          })
        );
      })
    );
};
