import { newSpecPage } from '@stencil/core/testing';
import { FitbitLogin } from './fitbit-login';

describe('fitbit-login', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [FitbitLogin],
      html: '<fitbit-login></fitbit-login>',
    });
    expect(root).toEqualHtml(`
      <fitbit-login>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </fitbit-login>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [FitbitLogin],
      html: `<fitbit-login first="Stencil" last="'Don't call me a framework' JS"></fitbit-login>`,
    });
    expect(root).toEqualHtml(`
      <fitbit-login first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </fitbit-login>
    `);
  });
});
