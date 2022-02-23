import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import {
  faVuejs, faFontAwesome, faGithub,
} from '@fortawesome/free-brands-svg-icons';

import {
  faCompass,
  faHeart,
  faBookmark,
  faComment,
  faSmile,
  faPlusSquare,

} from '@fortawesome/free-regular-svg-icons';
import {

  faEllipsisH,
  faHomeAlt,
  faLocationArrow,
  faSearch,

} from '@fortawesome/free-solid-svg-icons';

library.add(
  faVuejs,
  faFontAwesome,
  faGithub,
  faHomeAlt,
  faHeart,
  faCompass,
  faSearch,
  faBookmark,
  faLocationArrow,
  faComment,
  faSmile,
  faEllipsisH,
  faPlusSquare,
);

export default FontAwesomeIcon;
