import { registerStyles } from '@vaadin/vaadin-themable-mixin/register-styles.js';

// Import the tagged template function that is used to define
// a multi-line CSS string
import { css } from '@vaadin/vaadin-themable-mixin/register-styles.js';

// Define and register a style sheet for the <vaadin-text-field> component
registerStyles('', css`
  body {
    color: red;
  }
`);

console.log('regiostrado!!!')
