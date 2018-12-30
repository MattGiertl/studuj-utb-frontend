import React, { Component } from 'react';
import FieldOfStudyTemplate from '../templates/FieldOfStudyTemplate';

class FieldOfStudyDetailPage extends Component {
  state = {
    fieldOfStudy: this.props.match.params.fieldName,
    details: {
      fieldName: 'Not provided',
      fieldDetails: 'Not Provided',
      programDetails: 'Not Provided',
      usage: 'not provided',
    },
  };

  componentWillMount() {
    const { fieldOfStudy } = this.state;

    switch (fieldOfStudy) {
      case 'ctp':
        this.setState({
          details: {
            fieldName: 'Chemie a technologie potravin',
            fieldDetails:
              'Lorem ipsum dolor amet synth prism ad kogi. Eu organic umami actually. Yr live-edge vinyl synth 90s aesthetic iPhone dreamcatcher kitsch photo booth +1 af mixtape shabby chic. Adipisicing salvia PBR&B, incididunt master cleanse coloring book literally brooklyn knausgaard green juice la croix organic ad selfies',
            programDetails:
              'Chillwave ramps PBR&B woke, VHS laborum shabby chic sartorial lorem ad consequat readymade. Selvage plaid adaptogen green juice, pok pok anim poke est bushwick palo santo roof party stumptown. Pariatur four loko church-key pok pok vice brooklyn tbh proident pour-over anim poutine neutra tacos ex. Voluptate do selfies selvage four loko lumbersexual officia quinoa authentic messenger bag. Ea irure coloring book poutine velit small batch. Distillery 90 raw denim dolor gochujang, viral cornhole.',
            usage:
              'Squid chicharrones put a bird on it, locavore activated charcoal actually church-key aliquip cardigan flexitarian artisan gastropub organic ipsum bespoke. Ut leggings master cleanse man braid esse, everyday carry ex godard anim typewriter meditation ut DIY brooklyn. Tbh hammock offal, ramps sed hot chicken 3 wolf moon ipsum kickstarter tote bag williamsburg subway tile. Et exercitation butcher blue bottle migas incididunt, fugiat crucifix ex dolor.',
          },
        });
        break;
      case 'ctm':
        this.setState({
          details: {
            fieldName: 'Chemie a technologie materiálů',
            fieldDetails:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condimentum, velit sollicitudin laoreet suscipit, ipsum mauris dapibus dui, a condimentum est tortor ac sapien. Nullam a mollis dui. Praesent vulputate, urna dignissim pharetra commodo, nisl mi rutrum justo, id ultrices nunc elit ac erat. Nunc a nunc tortor. Integer augue metus, feugiat non vulputate sit amet, egestas non diam. Pellentesque id lorem id nunc sollicitudin tempor at at felis. Integer fermentum euismod finibus.',
            programDetails:
              'In efficitur, nunc id dapibus facilisis, lacus orci scelerisque mi, id viverra nisi velit ut odio. Sed nec eros sagittis, dapibus odio sed, cursus velit. Aenean ultricies nisi in lobortis ornare. In hac habitasse platea dictumst. Vestibulum ultricies iaculis nibh vitae dignissim. In at congue orci. Etiam malesuada commodo nisl, et aliquet tortor congue at. Vestibulum in felis condimentum, porttitor sapien a, feugiat erat. Aenean congue vitae ligula sed sollicitudin. Aliquam imperdiet luctus nisl, et pharetra diam condimentum nec. Nunc viverra eleifend purus fringilla',
            usage:
              'elementum. Ut nibh mi, varius id augue nec, lacinia euismod diam. Mauris venenatis lacinia placerat. Vivamus vulputate, quam porttitor volutpat eleifend, neque orci facilisis turpis, eu sodales arcu felis et dui. In elementum blandit mauris non vehicula. Ut non odio id eros ultricies facilisis.',
          },
        });
        break;
      case 'pci':
        this.setState({
          details: {
            fieldName: 'Procesní inženýrství',
            fieldDetails:
              'Aliquam erat volutpat. Morbi porta nisi non velit blandit aliquet in at urna. Etiam tempus iaculis congue. Mauris hendrerit, ante eget sodales rhoncus, odio augue lobortis nisi, eget hendrerit ante nibh consectetur lorem. Aliquam orci sem, efficitur et libero sit amet, posuere sagittis magna. Vestibulum vel finibus velit, id mollis felis. Ut tincidunt fermentum libero, vitae tempus dolor ullamcorper sit amet. Proin ultrices tincidunt ultrices. Nunc diam tortor, cursus eu interdum vel, ultrices id ipsum.',
            programDetails:
              'Vivamus lacinia tempus arcu, nec placerat libero condimentum vitae. Sed lacinia ipsum in ante malesuada, et gravida risus iaculis. Donec fermentum molestie ex quis dapibus. Praesent facilisis ornare efficitur. Nullam congue eleifend pellentesque. Etiam tempus rutrum tincidunt. Fusce feugiat, mi molestie accumsan vulputate, nisi eros feugiat ante, a suscipit lacus nibh non elit. Mauris interdum bibendum auctor. Duis cursus lacus a facilisis fermentum.',
            usage:
              'Donec et eleifend. Curabitur quis consequat purus, sed ornare magna. Etiam lobortis massa nec enim tincidunt, eget rhoncus ligula finibus. Aenean ac dapibus quam. Duis posuere mi velit, sit amet dapibus eros viverra vitae. Nullam tempor luctus odio, scelerisque dictum tellus volutpat at. Nulla dui lorem, lacinia vitae urna at, hendrerit vestibulum eros. In malesuada quam eget massa pulvinar commodo. Pellentesque eget augue faucibus, vehicula turpis a, eleifend ante. Vivamus sodales convallis eros, a dignissim lacus. Sed molestie urna at nisi vestibulum, id malesuada lacus rutrum.',
          },
        });
        break;
      case 'ekm':
        this.setState({
          details: {
            fieldName: 'Ekonomika a management',
            fieldDetails:
              'Nam sit amet tortor ut tellus cursus aliquam. In eget rhoncus tortor. Sed magna mauris, convallis quis velit a, ornare ornare elit. Fusce aliquet sapien at aliquet rutrum. Morbi hendrerit nisl vel metus mollis, sit amet molestie lacus tincidunt. Curabitur nec enim eu risus vestibulum tempor. Cras sollicitudin scelerisque convallis. Curabitur laoreet, turpis et rhoncus sagittis, risus mi sodales augue, non semper risus nibh vel mi. Integer nibh sapien, vulputate eu tellus sed, lacinia ultricies turpis.',
            programDetails:
              'Nullam ac tortor ac dolor tincidunt pretium. Fusce ut nunc non orci sodales aliquam a ac dui. Sed at sem at magna ultricies rhoncus. Mauris nec magna mauris. Duis sed diam ac diam porttitor lacinia eu non orci. Phasellus vitae ullamcorper urna, et volutpat augue. Aliquam mauris risus, tincidunt nec elementum sed, pellentesque et mauris. Vestibulum ut ligula lacinia, luctus ante eu, dignissim purus. Proin dictum lacinia lorem, ut ultrices ligula facilisis at. Sed luctus vestibulum sagittis. Aliquam erat volutpat. Pellentesque varius vulputate elit sed venenatis.',
            usage:
              'Nulla ut egestas arcu. Donec augue ligula, tempus luctus lacinia et, efficitur vitae tortor. In aliquet metus quis elementum facilisis. Curabitur vel feugiat metus, et vehicula leo. Mauris mi est, ullamcorper sit amet massa in, pretium dictum nibh. Proin non tortor eget ex iaculis hendrerit quis id ex. Integer efficitur et turpis vel tincidunt. Ut eu dolor orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent a egestas magna, in rutrum massa. Sed cursus felis non sem hendrerit consectetur. Aliquam ac libero vel dui volutpat dictum vitae in eros.',
          },
        });
        break;
      case 'ucd':
        this.setState({
          details: {
            fieldName: 'Účetnictví a daně',
            fieldDetails:
              'Ut sit amet elit augue. Fusce laoreet ultrices vulputate. Duis turpis lorem, egestas venenatis tincidunt a, aliquet sit amet ligula. Curabitur congue ullamcorper turpis a tincidunt. Sed luctus magna eget faucibus malesuada. Vivamus sollicitudin volutpat vulputate. Vestibulum blandit sem eget massa faucibus pharetra.',
            programDetails:
              'Mauris et faucibus ligula. Morbi eu tellus non ligula auctor consectetur vitae id leo. Nam nec odio eget augue aliquet malesuada. Nunc in sapien molestie est sollicitudin mattis eu nec nunc. Proin at sodales diam, quis vulputate arcu. Etiam eleifend quam vitae enim commodo viverra eget nec lorem. Maecenas dapibus quam gravida venenatis posuere. Vivamus eu elit rhoncus, gravida justo non',
            usage:
              'luctus velit. Aenean eleifend lectus vel eros varius laoreet. Quisque ante leo, pharetra pulvinar nulla euismod, gravida consectetur nisi. Ut eu nibh arcu. Donec justo augue, dictum id purus pulvinar, ultricies imperdiet neque. Duis ut rutrum turpis. Proin dolor ligula, porta quis facilisis lobortis, tincidunt a odio. Proin a commodo sem.',
          },
        });
        break;
      case 'hps':
        this.setState({
          details: {
            fieldName: 'Hospodářská politika a správa',
            fieldDetails:
              'Aenean vulputate vel nisl ut imperdiet. Maecenas tempus enim at nibh maximus ultricies. Cras accumsan malesuada erat, quis sagittis erat euismod nec. Morbi viverra ultrices ultrices. Vestibulum risus nisl, maximus ac sollicitudin vitae, viverra sed leo. Pellentesque sit amet viverra metus. Sed lacinia neque tortor, ut consectetur purus interdum mattis. Aliquam at magna lorem. Donec malesuada mauris dolor, at congue dui imperdiet sit amet. Fusce varius ut mauris sit amet vehicula. Nulla ornare pulvinar elit in faucibus. Aliquam malesuada augue eget sapien blandit pellentesque. Morbi nec felis et dolor auctor porta blandit sed metus. Nullam ultrices est quis dui tincidunt volutpat.',
            programDetails:
              'In hac habitasse platea dictumst. Nam cursus justo id justo ultrices scelerisque. Sed luctus neque tortor, sit amet rutrum eros pulvinar at. Nullam vitae nulla ut tellus varius mattis. In hac habitasse platea dictumst. Cras rutrum augue in imperdiet mollis. Phasellus iaculis orci eget nisi molestie, condimentum condimentum tellus malesuada. Integer est velit, ultricies a dignissim eget, commodo a enim. Sed blandit tempor sem, vel accumsan lectus.',
            usage:
              'Aenean scelerisque euismod neque, vitae rutrum ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ultrices sagittis tristique. Mauris a ultrices neque. Vivamus laoreet neque lorem. Etiam dignissim est sodales leo maximus, aliquet eleifend nunc convallis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas nec libero vitae sem consequat semper. Donec nulla tortor, sollicitudin ut vestibulum vel, viverra id nisl. Integer pretium ligula non convallis tristique.',
          },
        });
        break;
      case 'mks':
        this.setState({
          details: {
            fieldName: 'Mediální a komunikační studia',
            fieldDetails:
              'Aenean vulputate vel nisl ut imperdiet. Maecenas tempus enim at nibh maximus ultricies. Cras accumsan malesuada erat, quis sagittis erat euismod nec. Morbi viverra ultrices ultrices. Vestibulum risus nisl, maximus ac sollicitudin vitae, viverra sed leo. Pellentesque sit amet viverra metus. Sed lacinia neque tortor, ut consectetur purus interdum mattis. Aliquam at magna lorem. Donec malesuada mauris dolor, at congue dui imperdiet sit amet. Fusce varius ut mauris sit amet vehicula. Nulla ornare pulvinar elit in faucibus. Aliquam malesuada augue eget sapien blandit pellentesque. Morbi nec felis et dolor auctor porta blandit sed metus. Nullam ultrices est quis dui tincidunt volutpat.',
            programDetails:
              'In hac habitasse platea dictumst. Nam cursus justo id justo ultrices scelerisque. Sed luctus neque tortor, sit amet rutrum eros pulvinar at. Nullam vitae nulla ut tellus varius mattis. In hac habitasse platea dictumst. Cras rutrum augue in imperdiet mollis. Phasellus iaculis orci eget nisi molestie, condimentum condimentum tellus malesuada. Integer est velit, ultricies a dignissim eget, commodo a enim. Sed blandit tempor sem, vel accumsan lectus.',
            usage:
              'Aenean scelerisque euismod neque, vitae rutrum ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ultrices sagittis tristique. Mauris a ultrices neque. Vivamus laoreet neque lorem. Etiam dignissim est sodales leo maximus, aliquet eleifend nunc convallis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas nec libero vitae sem consequat semper. Donec nulla tortor, sollicitudin ut vestibulum vel, viverra id nisl. Integer pretium ligula non convallis tristique.',
          },
        });
        break;
      case 'vyu':
        this.setState({
          details: {
            fieldName: 'Výtvarná umění',
            fieldDetails:
              'Nunc eu aliquet erat, nec euismod purus. Mauris eget vestibulum felis. Duis pellentesque nisl a tellus lacinia feugiat. Suspendisse quis pulvinar tortor, et blandit purus. Donec vitae orci enim. Etiam ut purus non justo malesuada blandit eget quis neque. Duis pharetra sagittis dui, sit amet condimentum orci ultrices sed. Nam dictum enim quis volutpat tristique. Nullam posuere ipsum sapien, vel molestie nibh lobortis rutrum. Integer tempus tellus eleifend quam aliquam gravida. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras lobortis vehicula massa eget cursus. Proin bibendum sodales risus, sed rutrum leo condimentum et. Curabitur porttitor dignissim fermentum. Morbi ac dolor vel ipsum convallis ornare.',
            programDetails:
              'In hac habitasse platea dictumst. Nam cursus justo id justo ultrices scelerisque. Sed luctus neque tortor, sit amet rutrum eros pulvinar at. Nullam vitae nulla ut tellus varius mattis. In hac habitasse platea dictumst. Cras rutrum augue in imperdiet mollis. Phasellus iaculis orci eget nisi molestie, condimentum condimentum tellus malesuada. Integer est velit, ultricies a dignissim eget, commodo a enim. Sed blandit tempor sem, vel accumsan lectus.',
            usage:
              'Aenean scelerisque euismod neque, vitae rutrum ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ultrices sagittis tristique. Mauris a ultrices neque. Vivamus laoreet neque lorem. Etiam dignissim est sodales leo maximus, aliquet eleifend nunc convallis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas nec libero vitae sem consequat semper. Donec nulla tortor, sollicitudin ut vestibulum vel, viverra id nisl. Integer pretium ligula non convallis tristique.',
          },
        });
        break;
      case 'fll':
        this.setState({
          details: {
            fieldName: 'Filologie',
            fieldDetails:
              'Nunc eu aliquet erat, nec euismod purus. Mauris eget vestibulum felis. Duis pellentesque nisl a tellus lacinia feugiat. Suspendisse quis pulvinar tortor, et blandit purus. Donec vitae orci enim. Etiam ut purus non justo malesuada blandit eget quis neque. Duis pharetra sagittis dui, sit amet condimentum orci ultrices sed. Nam dictum enim quis volutpat tristique. Nullam posuere ipsum sapien, vel molestie nibh lobortis rutrum. Integer tempus tellus eleifend quam aliquam gravida. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras lobortis vehicula massa eget cursus. Proin bibendum sodales risus, sed rutrum leo condimentum et. Curabitur porttitor dignissim fermentum. Morbi ac dolor vel ipsum convallis ornare.',
            programDetails:
              'In hac habitasse platea dictumst. Nam cursus justo id justo ultrices scelerisque. Sed luctus neque tortor, sit amet rutrum eros pulvinar at. Nullam vitae nulla ut tellus varius mattis. In hac habitasse platea dictumst. Cras rutrum augue in imperdiet mollis. Phasellus iaculis orci eget nisi molestie, condimentum condimentum tellus malesuada. Integer est velit, ultricies a dignissim eget, commodo a enim. Sed blandit tempor sem, vel accumsan lectus.',
            usage:
              'Aenean scelerisque euismod neque, vitae rutrum ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ultrices sagittis tristique. Mauris a ultrices neque. Vivamus laoreet neque lorem. Etiam dignissim est sodales leo maximus, aliquet eleifend nunc convallis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas nec libero vitae sem consequat semper. Donec nulla tortor, sollicitudin ut vestibulum vel, viverra id nisl. Integer pretium ligula non convallis tristique.',
          },
        });
        break;
      case 'ose':
        this.setState({
          details: {
            fieldName: 'Ošetřování',
            fieldDetails:
              'Nunc eu aliquet erat, nec euismod purus. Mauris eget vestibulum felis. Duis pellentesque nisl a tellus lacinia feugiat. Suspendisse quis pulvinar tortor, et blandit purus. Donec vitae orci enim. Etiam ut purus non justo malesuada blandit eget quis neque. Duis pharetra sagittis dui, sit amet condimentum orci ultrices sed. Nam dictum enim quis volutpat tristique. Nullam posuere ipsum sapien, vel molestie nibh lobortis rutrum. Integer tempus tellus eleifend quam aliquam gravida. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras lobortis vehicula massa eget cursus. Proin bibendum sodales risus, sed rutrum leo condimentum et. Curabitur porttitor dignissim fermentum. Morbi ac dolor vel ipsum convallis ornare.',
            programDetails:
              'In hac habitasse platea dictumst. Nam cursus justo id justo ultrices scelerisque. Sed luctus neque tortor, sit amet rutrum eros pulvinar at. Nullam vitae nulla ut tellus varius mattis. In hac habitasse platea dictumst. Cras rutrum augue in imperdiet mollis. Phasellus iaculis orci eget nisi molestie, condimentum condimentum tellus malesuada. Integer est velit, ultricies a dignissim eget, commodo a enim. Sed blandit tempor sem, vel accumsan lectus.',
            usage:
              'Aenean scelerisque euismod neque, vitae rutrum ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ultrices sagittis tristique. Mauris a ultrices neque. Vivamus laoreet neque lorem. Etiam dignissim est sodales leo maximus, aliquet eleifend nunc convallis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas nec libero vitae sem consequat semper. Donec nulla tortor, sollicitudin ut vestibulum vel, viverra id nisl. Integer pretium ligula non convallis tristique.',
          },
        });
        break;
      case 'ped':
        this.setState({
          details: {
            fieldName: 'Pedagogika',
            fieldDetails:
              'Nunc eu aliquet erat, nec euismod purus. Mauris eget vestibulum felis. Duis pellentesque nisl a tellus lacinia feugiat. Suspendisse quis pulvinar tortor, et blandit purus. Donec vitae orci enim. Etiam ut purus non justo malesuada blandit eget quis neque. Duis pharetra sagittis dui, sit amet condimentum orci ultrices sed. Nam dictum enim quis volutpat tristique. Nullam posuere ipsum sapien, vel molestie nibh lobortis rutrum. Integer tempus tellus eleifend quam aliquam gravida. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras lobortis vehicula massa eget cursus. Proin bibendum sodales risus, sed rutrum leo condimentum et. Curabitur porttitor dignissim fermentum. Morbi ac dolor vel ipsum convallis ornare.',
            programDetails:
              'In hac habitasse platea dictumst. Nam cursus justo id justo ultrices scelerisque. Sed luctus neque tortor, sit amet rutrum eros pulvinar at. Nullam vitae nulla ut tellus varius mattis. In hac habitasse platea dictumst. Cras rutrum augue in imperdiet mollis. Phasellus iaculis orci eget nisi molestie, condimentum condimentum tellus malesuada. Integer est velit, ultricies a dignissim eget, commodo a enim. Sed blandit tempor sem, vel accumsan lectus.',
            usage:
              'Aenean scelerisque euismod neque, vitae rutrum ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ultrices sagittis tristique. Mauris a ultrices neque. Vivamus laoreet neque lorem. Etiam dignissim est sodales leo maximus, aliquet eleifend nunc convallis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas nec libero vitae sem consequat semper. Donec nulla tortor, sollicitudin ut vestibulum vel, viverra id nisl. Integer pretium ligula non convallis tristique.',
          },
        });
        break;
      case 'swi':
        this.setState({
          details: {
            fieldName: 'Softwarové inženýrství',
            fieldDetails:
              'Nunc eu aliquet erat, nec euismod purus. Mauris eget vestibulum felis. Duis pellentesque nisl a tellus lacinia feugiat. Suspendisse quis pulvinar tortor, et blandit purus. Donec vitae orci enim. Etiam ut purus non justo malesuada blandit eget quis neque. Duis pharetra sagittis dui, sit amet condimentum orci ultrices sed. Nam dictum enim quis volutpat tristique. Nullam posuere ipsum sapien, vel molestie nibh lobortis rutrum. Integer tempus tellus eleifend quam aliquam gravida. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras lobortis vehicula massa eget cursus. Proin bibendum sodales risus, sed rutrum leo condimentum et. Curabitur porttitor dignissim fermentum. Morbi ac dolor vel ipsum convallis ornare.',
            programDetails:
              'In hac habitasse platea dictumst. Nam cursus justo id justo ultrices scelerisque. Sed luctus neque tortor, sit amet rutrum eros pulvinar at. Nullam vitae nulla ut tellus varius mattis. In hac habitasse platea dictumst. Cras rutrum augue in imperdiet mollis. Phasellus iaculis orci eget nisi molestie, condimentum condimentum tellus malesuada. Integer est velit, ultricies a dignissim eget, commodo a enim. Sed blandit tempor sem, vel accumsan lectus.',
            usage:
              'Aenean scelerisque euismod neque, vitae rutrum ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ultrices sagittis tristique. Mauris a ultrices neque. Vivamus laoreet neque lorem. Etiam dignissim est sodales leo maximus, aliquet eleifend nunc convallis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas nec libero vitae sem consequat semper. Donec nulla tortor, sollicitudin ut vestibulum vel, viverra id nisl. Integer pretium ligula non convallis tristique.',
          },
        });
        break;
      case 'irt':
        this.setState({
          details: {
            fieldName: 'Informatické a řídící technologie',
            fieldDetails:
              'Nunc eu aliquet erat, nec euismod purus. Mauris eget vestibulum felis. Duis pellentesque nisl a tellus lacinia feugiat. Suspendisse quis pulvinar tortor, et blandit purus. Donec vitae orci enim. Etiam ut purus non justo malesuada blandit eget quis neque. Duis pharetra sagittis dui, sit amet condimentum orci ultrices sed. Nam dictum enim quis volutpat tristique. Nullam posuere ipsum sapien, vel molestie nibh lobortis rutrum. Integer tempus tellus eleifend quam aliquam gravida. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras lobortis vehicula massa eget cursus. Proin bibendum sodales risus, sed rutrum leo condimentum et. Curabitur porttitor dignissim fermentum. Morbi ac dolor vel ipsum convallis ornare.',
            programDetails:
              'In hac habitasse platea dictumst. Nam cursus justo id justo ultrices scelerisque. Sed luctus neque tortor, sit amet rutrum eros pulvinar at. Nullam vitae nulla ut tellus varius mattis. In hac habitasse platea dictumst. Cras rutrum augue in imperdiet mollis. Phasellus iaculis orci eget nisi molestie, condimentum condimentum tellus malesuada. Integer est velit, ultricies a dignissim eget, commodo a enim. Sed blandit tempor sem, vel accumsan lectus.',
            usage:
              'Aenean scelerisque euismod neque, vitae rutrum ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ultrices sagittis tristique. Mauris a ultrices neque. Vivamus laoreet neque lorem. Etiam dignissim est sodales leo maximus, aliquet eleifend nunc convallis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas nec libero vitae sem consequat semper. Donec nulla tortor, sollicitudin ut vestibulum vel, viverra id nisl. Integer pretium ligula non convallis tristique.',
          },
        });
        break;
      case 'btsm':
        this.setState({
          details: {
            fieldName: 'Bezpečnostní technologie, systémy a management',
            fieldDetails:
              'Nunc eu aliquet erat, nec euismod purus. Mauris eget vestibulum felis. Duis pellentesque nisl a tellus lacinia feugiat. Suspendisse quis pulvinar tortor, et blandit purus. Donec vitae orci enim. Etiam ut purus non justo malesuada blandit eget quis neque. Duis pharetra sagittis dui, sit amet condimentum orci ultrices sed. Nam dictum enim quis volutpat tristique. Nullam posuere ipsum sapien, vel molestie nibh lobortis rutrum. Integer tempus tellus eleifend quam aliquam gravida. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras lobortis vehicula massa eget cursus. Proin bibendum sodales risus, sed rutrum leo condimentum et. Curabitur porttitor dignissim fermentum. Morbi ac dolor vel ipsum convallis ornare.',
            programDetails:
              'In hac habitasse platea dictumst. Nam cursus justo id justo ultrices scelerisque. Sed luctus neque tortor, sit amet rutrum eros pulvinar at. Nullam vitae nulla ut tellus varius mattis. In hac habitasse platea dictumst. Cras rutrum augue in imperdiet mollis. Phasellus iaculis orci eget nisi molestie, condimentum condimentum tellus malesuada. Integer est velit, ultricies a dignissim eget, commodo a enim. Sed blandit tempor sem, vel accumsan lectus.',
            usage:
              'Aenean scelerisque euismod neque, vitae rutrum ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ultrices sagittis tristique. Mauris a ultrices neque. Vivamus laoreet neque lorem. Etiam dignissim est sodales leo maximus, aliquet eleifend nunc convallis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas nec libero vitae sem consequat semper. Donec nulla tortor, sollicitudin ut vestibulum vel, viverra id nisl. Integer pretium ligula non convallis tristique.',
          },
        });
        break;
      case 'bsp':
        this.setState({
          details: {
            fieldName: 'Bezpečnost společnosti',
            fieldDetails:
              'Nunc eu aliquet erat, nec euismod purus. Mauris eget vestibulum felis. Duis pellentesque nisl a tellus lacinia feugiat. Suspendisse quis pulvinar tortor, et blandit purus. Donec vitae orci enim. Etiam ut purus non justo malesuada blandit eget quis neque. Duis pharetra sagittis dui, sit amet condimentum orci ultrices sed. Nam dictum enim quis volutpat tristique. Nullam posuere ipsum sapien, vel molestie nibh lobortis rutrum. Integer tempus tellus eleifend quam aliquam gravida. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras lobortis vehicula massa eget cursus. Proin bibendum sodales risus, sed rutrum leo condimentum et. Curabitur porttitor dignissim fermentum. Morbi ac dolor vel ipsum convallis ornare.',
            programDetails:
              'In hac habitasse platea dictumst. Nam cursus justo id justo ultrices scelerisque. Sed luctus neque tortor, sit amet rutrum eros pulvinar at. Nullam vitae nulla ut tellus varius mattis. In hac habitasse platea dictumst. Cras rutrum augue in imperdiet mollis. Phasellus iaculis orci eget nisi molestie, condimentum condimentum tellus malesuada. Integer est velit, ultricies a dignissim eget, commodo a enim. Sed blandit tempor sem, vel accumsan lectus.',
            usage:
              'Aenean scelerisque euismod neque, vitae rutrum ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ultrices sagittis tristique. Mauris a ultrices neque. Vivamus laoreet neque lorem. Etiam dignissim est sodales leo maximus, aliquet eleifend nunc convallis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas nec libero vitae sem consequat semper. Donec nulla tortor, sollicitudin ut vestibulum vel, viverra id nisl. Integer pretium ligula non convallis tristique.',
          },
        });
        break;
      case 'ocb':
        this.setState({
          details: {
            fieldName: 'Ochrana obyvatelstva',
            fieldDetails:
              'Nunc eu aliquet erat, nec euismod purus. Mauris eget vestibulum felis. Duis pellentesque nisl a tellus lacinia feugiat. Suspendisse quis pulvinar tortor, et blandit purus. Donec vitae orci enim. Etiam ut purus non justo malesuada blandit eget quis neque. Duis pharetra sagittis dui, sit amet condimentum orci ultrices sed. Nam dictum enim quis volutpat tristique. Nullam posuere ipsum sapien, vel molestie nibh lobortis rutrum. Integer tempus tellus eleifend quam aliquam gravida. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras lobortis vehicula massa eget cursus. Proin bibendum sodales risus, sed rutrum leo condimentum et. Curabitur porttitor dignissim fermentum. Morbi ac dolor vel ipsum convallis ornare.',
            programDetails:
              'In hac habitasse platea dictumst. Nam cursus justo id justo ultrices scelerisque. Sed luctus neque tortor, sit amet rutrum eros pulvinar at. Nullam vitae nulla ut tellus varius mattis. In hac habitasse platea dictumst. Cras rutrum augue in imperdiet mollis. Phasellus iaculis orci eget nisi molestie, condimentum condimentum tellus malesuada. Integer est velit, ultricies a dignissim eget, commodo a enim. Sed blandit tempor sem, vel accumsan lectus.',
            usage:
              'Aenean scelerisque euismod neque, vitae rutrum ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ultrices sagittis tristique. Mauris a ultrices neque. Vivamus laoreet neque lorem. Etiam dignissim est sodales leo maximus, aliquet eleifend nunc convallis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas nec libero vitae sem consequat semper. Donec nulla tortor, sollicitudin ut vestibulum vel, viverra id nisl. Integer pretium ligula non convallis tristique.',
          },
        });
        break;
      case 'pri':
        this.setState({
          details: {
            fieldName: 'Procesní inženýrství',
            fieldDetails:
              'Nunc eu aliquet erat, nec euismod purus. Mauris eget vestibulum felis. Duis pellentesque nisl a tellus lacinia feugiat. Suspendisse quis pulvinar tortor, et blandit purus. Donec vitae orci enim. Etiam ut purus non justo malesuada blandit eget quis neque. Duis pharetra sagittis dui, sit amet condimentum orci ultrices sed. Nam dictum enim quis volutpat tristique. Nullam posuere ipsum sapien, vel molestie nibh lobortis rutrum. Integer tempus tellus eleifend quam aliquam gravida. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras lobortis vehicula massa eget cursus. Proin bibendum sodales risus, sed rutrum leo condimentum et. Curabitur porttitor dignissim fermentum. Morbi ac dolor vel ipsum convallis ornare.',
            programDetails:
              'In hac habitasse platea dictumst. Nam cursus justo id justo ultrices scelerisque. Sed luctus neque tortor, sit amet rutrum eros pulvinar at. Nullam vitae nulla ut tellus varius mattis. In hac habitasse platea dictumst. Cras rutrum augue in imperdiet mollis. Phasellus iaculis orci eget nisi molestie, condimentum condimentum tellus malesuada. Integer est velit, ultricies a dignissim eget, commodo a enim. Sed blandit tempor sem, vel accumsan lectus.',
            usage:
              'Aenean scelerisque euismod neque, vitae rutrum ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ultrices sagittis tristique. Mauris a ultrices neque. Vivamus laoreet neque lorem. Etiam dignissim est sodales leo maximus, aliquet eleifend nunc convallis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas nec libero vitae sem consequat semper. Donec nulla tortor, sollicitudin ut vestibulum vel, viverra id nisl. Integer pretium ligula non convallis tristique.',
          },
        });
        break;
      default:
        break;
    }
  }

  componentDidMount() {
    console.log(this.state.fieldOfStudy);
  }

  render() {
    const { details } = this.state;
    return <FieldOfStudyTemplate details={details} />;
  }
}

export default FieldOfStudyDetailPage;
