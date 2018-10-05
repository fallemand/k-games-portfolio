const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

// React 16 Enzyme adapter & Make Enzyme functions available in all test files without importing
Enzyme.configure({ adapter: new Adapter() });
global.shallow = Enzyme.shallow;
global.render = Enzyme.render;
global.mount = Enzyme.mount;
global.escapeSnapshot = component => component.debug().replace(/"/g, '\'');

// Mocks
jest.mock('react-router-dom', () => ({ withRouter: Component => Component }));
