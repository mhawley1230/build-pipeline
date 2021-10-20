import { createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';

describe('<Header />', () => {
  let mount;

  function Header({ children }) {
    return (
      <ThemeProvider theme={{ success: { main: '#fff' } }}>
        {children}
      </ThemeProvider>
    );
  }

  before(() => {
    mount = createMount(Header);
  });

  after(() => {
    mount.cleanUp();
  });

  it('should render', () => {
    const wrapper = mount(<MockedTheme><Header /></MockedTheme>);
    expect(wrapper.find(Toolbar).to.have.lengthOf(1));
  });
});
