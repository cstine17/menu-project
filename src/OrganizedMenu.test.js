import React, {useState} from 'react';
import { shallow, mount, render } from 'enzyme';
import OrganizedMenu from './OrganizedMenu';
import foods from './Components/data'

const menu = [
  {
    id: 1,
    title: 'El Gaucho',
    category: 'sandwich',
    price: 11.00,
    image: './images/El-Gaucho.jpeg',
    description: `grilled flank steak. gorgonzola. red onion. sautéed mushroommayo. horseradish sidecar. on toasted rustic bread `,
  },
  {
    id: 2,
    title: 'Forestière',
    category: 'sandwich',
    price: 10.00,
    image: './images/Forestière.jpeg',
    description: `barely-smoked golden beet. goat cheese. apricot. basil. dressed arugula `,
  },
  {
    id: 3,
    title: 'Rufus Stole the Chicken, Too?',
    category: 'sandwich',
    price: 11.00,
    image: './images/Rufus-Chicken.jpeg',
    description: `citrus-roasted chicken breast. bacon. brie. tomato. greens. mayo. on toasted french bread `,
  },
  {
    id: 4,
    title: 'Quebec',
    category: 'sandwich',
    price: 11.00,
    image: './images/Quebec.jpeg',
    description: `prosciutto. brie. apple. scallion butter `,
  },
  {
    id: 5,
    title: 'Cuban Mojo',
    category: 'sandwich',
    price: 11.00,
    image: './images/Cuban-Mojo.jpeg',
    description: `roasted pork shoulder. black forest ham. swiss cheese. dill pickle. mustard. grilled on french bread `,
  },
  {
    id: 6,
    title: 'Swim Meet',
    category: 'sandwich',
    price: 10.00,
    image: './images/Swim-Meet.jpeg',
    description: `fried egg. westphalia ham. goat cheese. arugula. shuga’s ketchup on toasted rosemary sourdough`,
  },
  {
    id: 7,
    title: 'Spicy Brazilian Coconut Shrimp Soup',
    category: 'soup',
    price: 5.00,
    image: './images/Spicy-Brazilian.jpeg',
    description: `shrimp. jalapeño. ginger. coconut milk. peanut. cilantro. lime. black sesame `,
  },
  {
    id: 8,
    title: 'Señor Pozole',
    category: 'soup',
    price: 5.00,
    image: './images/Pozole.jpeg',
    description: `pork shoulder. chorizo. hominy. chili pepper. radish. lime. cilantro `,
  },
  {
    id: 9,
    title: 'Soup of the Moment',
    category: 'soup',
    price: 5.00,
    image: './images/Soup-Moment.jpeg',
    description: `[see chalkboard]`,
  },
];

describe("OrganizedMenu", () => {
  it("should render my component", () => {
    const wrapper = shallow(<OrganizedMenu foods={menu}/>);
  });
});

// started working on figuring out tests for javascript/javascript react
// was quite limited in time since this is a new language for me
// focusing on additional features