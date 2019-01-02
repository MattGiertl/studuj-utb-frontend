import React, { Component } from 'react';
import FacultyInfoTemplate from '../templates/FacultyInfoTemplate';

class FacultyInfoPage extends Component {
  state = {
    facultyShortcut: this.props.match.params.facultyName,
    details: {
      facultyName: 'Not defined',
      facultyAbout: 'Not defined',
      facultyOpportunities: 'Not defined',
    },
  };

  componentWillMount() {
    const { facultyShortcut } = this.state;
    switch (facultyShortcut) {
      case 'ft':
        this.setState({
          details: {
            facultyName: 'Fakulta technologická',
            facultyAbout:
              'Nam id sapien sollicitudin nisi porta rutrum eget a purus. Sed lobortis ipsum ligula, non gravida lorem egestas non. Etiam pretium at justo nec euismod. Morbi vitae tempor magna, nec feugiat lorem. Aenean feugiat dolor quis pretium lobortis. In vitae sollicitudin eros. Cras purus elit, gravida nec malesuada eget, venenatis eget nunc. Integer non neque purus. Sed tellus lectus, aliquet id enim nec, rutrum efficitur justo. Curabitur pretium fringilla ante, vel pellentesque ex vestibulum eget. Nam ut commodo purus. Phasellus nec lobortis sem. Morbi tristique blandit arcu et elementum. Quisque hendrerit lorem nec diam maximus tempor. Quisque gravida vitae nibh sit amet vestibulum.',
            facultyOpportunities:
              'Praesent faucibus faucibus dui vel ultricies. Nunc sagittis porttitor eros, vel blandit nibh finibus interdum. Pellentesque sit amet tortor vulputate, dapibus neque et, iaculis libero. Mauris in convallis tortor. Vestibulum tincidunt, velit et rhoncus tempor, metus quam ultrices lacus, nec feugiat ligula augue sit amet ipsum. Curabitur placerat nunc dolor. Proin fringilla sodales urna a mattis. Nunc a nunc in quam accumsan faucibus vel quis elit. Nullam ornare semper elit at consectetur. Mauris libero felis, porta sed nisl lacinia, ornare faucibus odio. Aliquam blandit rhoncus odio ac laoreet. Nam molestie facilisis lobortis. Donec imperdiet enim id nisl luctus iaculis eu at ante.',
          },
        });
        break;
      case 'fame':
        this.setState({
          details: {
            facultyName: 'Fakulta managementu a ekonomiky',
            facultyAbout:
              'Nam id sapien sollicitudin nisi porta rutrum eget a purus. Sed lobortis ipsum ligula, non gravida lorem egestas non. Etiam pretium at justo nec euismod. Morbi vitae tempor magna, nec feugiat lorem. Aenean feugiat dolor quis pretium lobortis. In vitae sollicitudin eros. Cras purus elit, gravida nec malesuada eget, venenatis eget nunc. Integer non neque purus. Sed tellus lectus, aliquet id enim nec, rutrum efficitur justo. Curabitur pretium fringilla ante, vel pellentesque ex vestibulum eget. Nam ut commodo purus. Phasellus nec lobortis sem. Morbi tristique blandit arcu et elementum. Quisque hendrerit lorem nec diam maximus tempor. Quisque gravida vitae nibh sit amet vestibulum.',
            facultyOpportunities:
              'Praesent faucibus faucibus dui vel ultricies. Nunc sagittis porttitor eros, vel blandit nibh finibus interdum. Pellentesque sit amet tortor vulputate, dapibus neque et, iaculis libero. Mauris in convallis tortor. Vestibulum tincidunt, velit et rhoncus tempor, metus quam ultrices lacus, nec feugiat ligula augue sit amet ipsum. Curabitur placerat nunc dolor. Proin fringilla sodales urna a mattis. Nunc a nunc in quam accumsan faucibus vel quis elit. Nullam ornare semper elit at consectetur. Mauris libero felis, porta sed nisl lacinia, ornare faucibus odio. Aliquam blandit rhoncus odio ac laoreet. Nam molestie facilisis lobortis. Donec imperdiet enim id nisl luctus iaculis eu at ante.',
          },
        });
        break;
      case 'fmk':
        this.setState({
          details: {
            facultyName: 'Fakulta multimediálních komunikací',
            facultyAbout:
              'Nam id sapien sollicitudin nisi porta rutrum eget a purus. Sed lobortis ipsum ligula, non gravida lorem egestas non. Etiam pretium at justo nec euismod. Morbi vitae tempor magna, nec feugiat lorem. Aenean feugiat dolor quis pretium lobortis. In vitae sollicitudin eros. Cras purus elit, gravida nec malesuada eget, venenatis eget nunc. Integer non neque purus. Sed tellus lectus, aliquet id enim nec, rutrum efficitur justo. Curabitur pretium fringilla ante, vel pellentesque ex vestibulum eget. Nam ut commodo purus. Phasellus nec lobortis sem. Morbi tristique blandit arcu et elementum. Quisque hendrerit lorem nec diam maximus tempor. Quisque gravida vitae nibh sit amet vestibulum.',
            facultyOpportunities:
              'Praesent faucibus faucibus dui vel ultricies. Nunc sagittis porttitor eros, vel blandit nibh finibus interdum. Pellentesque sit amet tortor vulputate, dapibus neque et, iaculis libero. Mauris in convallis tortor. Vestibulum tincidunt, velit et rhoncus tempor, metus quam ultrices lacus, nec feugiat ligula augue sit amet ipsum. Curabitur placerat nunc dolor. Proin fringilla sodales urna a mattis. Nunc a nunc in quam accumsan faucibus vel quis elit. Nullam ornare semper elit at consectetur. Mauris libero felis, porta sed nisl lacinia, ornare faucibus odio. Aliquam blandit rhoncus odio ac laoreet. Nam molestie facilisis lobortis. Donec imperdiet enim id nisl luctus iaculis eu at ante.',
          },
        });
        break;
      case 'fhs':
        this.setState({
          details: {
            facultyName: 'Fakulta humanitních studií',
            facultyAbout:
              'Nam id sapien sollicitudin nisi porta rutrum eget a purus. Sed lobortis ipsum ligula, non gravida lorem egestas non. Etiam pretium at justo nec euismod. Morbi vitae tempor magna, nec feugiat lorem. Aenean feugiat dolor quis pretium lobortis. In vitae sollicitudin eros. Cras purus elit, gravida nec malesuada eget, venenatis eget nunc. Integer non neque purus. Sed tellus lectus, aliquet id enim nec, rutrum efficitur justo. Curabitur pretium fringilla ante, vel pellentesque ex vestibulum eget. Nam ut commodo purus. Phasellus nec lobortis sem. Morbi tristique blandit arcu et elementum. Quisque hendrerit lorem nec diam maximus tempor. Quisque gravida vitae nibh sit amet vestibulum.',
            facultyOpportunities:
              'Praesent faucibus faucibus dui vel ultricies. Nunc sagittis porttitor eros, vel blandit nibh finibus interdum. Pellentesque sit amet tortor vulputate, dapibus neque et, iaculis libero. Mauris in convallis tortor. Vestibulum tincidunt, velit et rhoncus tempor, metus quam ultrices lacus, nec feugiat ligula augue sit amet ipsum. Curabitur placerat nunc dolor. Proin fringilla sodales urna a mattis. Nunc a nunc in quam accumsan faucibus vel quis elit. Nullam ornare semper elit at consectetur. Mauris libero felis, porta sed nisl lacinia, ornare faucibus odio. Aliquam blandit rhoncus odio ac laoreet. Nam molestie facilisis lobortis. Donec imperdiet enim id nisl luctus iaculis eu at ante.',
          },
        });
        break;
      case 'fai':
        this.setState({
          details: {
            facultyName: 'Fakulta aplikované informatiky',
            facultyAbout:
              'Nam id sapien sollicitudin nisi porta rutrum eget a purus. Sed lobortis ipsum ligula, non gravida lorem egestas non. Etiam pretium at justo nec euismod. Morbi vitae tempor magna, nec feugiat lorem. Aenean feugiat dolor quis pretium lobortis. In vitae sollicitudin eros. Cras purus elit, gravida nec malesuada eget, venenatis eget nunc. Integer non neque purus. Sed tellus lectus, aliquet id enim nec, rutrum efficitur justo. Curabitur pretium fringilla ante, vel pellentesque ex vestibulum eget. Nam ut commodo purus. Phasellus nec lobortis sem. Morbi tristique blandit arcu et elementum. Quisque hendrerit lorem nec diam maximus tempor. Quisque gravida vitae nibh sit amet vestibulum.',
            facultyOpportunities:
              'Praesent faucibus faucibus dui vel ultricies. Nunc sagittis porttitor eros, vel blandit nibh finibus interdum. Pellentesque sit amet tortor vulputate, dapibus neque et, iaculis libero. Mauris in convallis tortor. Vestibulum tincidunt, velit et rhoncus tempor, metus quam ultrices lacus, nec feugiat ligula augue sit amet ipsum. Curabitur placerat nunc dolor. Proin fringilla sodales urna a mattis. Nunc a nunc in quam accumsan faucibus vel quis elit. Nullam ornare semper elit at consectetur. Mauris libero felis, porta sed nisl lacinia, ornare faucibus odio. Aliquam blandit rhoncus odio ac laoreet. Nam molestie facilisis lobortis. Donec imperdiet enim id nisl luctus iaculis eu at ante.',
          },
        });
        break;
      case 'flkr':
        this.setState({
          details: {
            facultyName: 'Fakulta logistiky a krizového řešení',
            facultyAbout:
              'Nam id sapien sollicitudin nisi porta rutrum eget a purus. Sed lobortis ipsum ligula, non gravida lorem egestas non. Etiam pretium at justo nec euismod. Morbi vitae tempor magna, nec feugiat lorem. Aenean feugiat dolor quis pretium lobortis. In vitae sollicitudin eros. Cras purus elit, gravida nec malesuada eget, venenatis eget nunc. Integer non neque purus. Sed tellus lectus, aliquet id enim nec, rutrum efficitur justo. Curabitur pretium fringilla ante, vel pellentesque ex vestibulum eget. Nam ut commodo purus. Phasellus nec lobortis sem. Morbi tristique blandit arcu et elementum. Quisque hendrerit lorem nec diam maximus tempor. Quisque gravida vitae nibh sit amet vestibulum.',
            facultyOpportunities:
              'Praesent faucibus faucibus dui vel ultricies. Nunc sagittis porttitor eros, vel blandit nibh finibus interdum. Pellentesque sit amet tortor vulputate, dapibus neque et, iaculis libero. Mauris in convallis tortor. Vestibulum tincidunt, velit et rhoncus tempor, metus quam ultrices lacus, nec feugiat ligula augue sit amet ipsum. Curabitur placerat nunc dolor. Proin fringilla sodales urna a mattis. Nunc a nunc in quam accumsan faucibus vel quis elit. Nullam ornare semper elit at consectetur. Mauris libero felis, porta sed nisl lacinia, ornare faucibus odio. Aliquam blandit rhoncus odio ac laoreet. Nam molestie facilisis lobortis. Donec imperdiet enim id nisl luctus iaculis eu at ante.',
          },
        });
        break;
      default:
        break;
    }
  }

  render() {
    const { details } = this.state;
    return <FacultyInfoTemplate details={details} />;
  }
}

export default FacultyInfoPage;
