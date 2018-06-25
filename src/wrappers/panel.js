import { getContainerNode, renderTemplate } from '../lib/utils';
import { component } from '../lib/suit.js';
import cx from 'classnames';
import defaultTemplates from './defaultTemplates';

export default panelOptions => widgetFactory => widgetOptions => {
  const { templates = {}, collapsible } = panelOptions;
  const { container, cssClasses } = widgetOptions;

  const allTemplates = {
    ...defaultTemplates,
    ...templates,
  };

  const panel = renderPanel({
    container: getContainerNode(container),
    cssClasses,
    templates: allTemplates,
    collapsible,
  });

  const widget = widgetFactory({
    ...widgetOptions,
    container: panel.body,
  });

  return {
    ...widget,
    render: opts => {
      updatePanel({
        panel,
        renderOpts: opts,
        constructorOpts: panelOptions,
      });

      widget.render(opts);
    },
  };
};

const suitPanel = component('Panel');

function renderPanel({
  container,
  cssClasses = {},
  templates = {},
  collapsible,
}) {
  const rootClassnames = cx(suitPanel(), cssClasses.panelRoot, {
    [suitPanel({ modifierName: 'collapsible' })]: collapsible,
  });

  const bodyClassnames = cx(
    suitPanel({ descendantName: 'body' }),
    cssClasses.panelBody
  );

  const root = document.createElement('div');
  root.classList = rootClassnames;

  let header;
  if (templates.header) {
    const headerClassnames = cx(
      suitPanel({ descendantName: 'header' }),
      cssClasses.panelRoot
    );
    header = document.createElement('div');
    header.innerHTML = renderTemplate({
      templateKey: 'header',
      templates,
    });
    header.classList = headerClassnames;
    root.appendChild(header);
  }

  if (collapsible) {
    const buttonClassnames = cx(
      suitPanel({ descendantName: 'collapseButton' }),
      cssClasses.collapseButton
    );
    const button = document.createElement('button');
    button.innerHTML = renderTemplate({
      templateKey: 'collapseButton',
      templates,
    });
    button.classList = buttonClassnames;

    let collapsed = false;
    button.addEventListener('click', () => {
      collapsed = !collapsed;
      root.classList.toggle(suitPanel({ modifierName: 'collapsed' }));
      button.innerHTML = renderTemplate({
        templateKey: 'collapseButton',
        templates,
        data: { collapsed },
      });
    });
    root.appendChild(button);
  }

  const body = document.createElement('div');
  body.classList = bodyClassnames;
  root.appendChild(body);

  let footer;
  if (templates.footer) {
    const footerClassnames = cx(
      suitPanel({ descendantName: 'footer' }),
      cssClasses.panelRoot
    );
    footer = document.createElement('div');
    footer.innerHTML = renderTemplate({
      templateKey: 'footer',
      templates,
    });
    footer.classList = footerClassnames;
    root.appendChild(footer);
  }

  container.appendChild(root);

  return {
    root,
    body,
    header,
    footer,
  };
}

function updatePanel({
  panel: { header, footer },
  renderOpts: { results },
  constructorOpts: { templates },
}) {
  if (header) {
    header.innerHTML = renderTemplate({
      templateKey: 'header',
      templates,
      data: {
        results,
      },
    });
  }
  if (footer) {
    footer.innerHTML = renderTemplate({
      templateKey: 'footer',
      templates,
      data: {
        results,
      },
    });
  }
}
