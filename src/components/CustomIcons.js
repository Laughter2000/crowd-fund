import { createIcon } from '@chakra-ui/icons';
// using `path`
export const Hamburger = createIcon({
  displayName: 'Hamburger',

  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: (
    <g fill="#FFF" fill-rule="evenodd">
      <path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z" />
    </g>
  ),
});

export const CloseIcon = createIcon({
  displayName: 'CloseIcon',

  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: (
    <g fill="#FFF" fill-rule="evenodd">
      <path d="M2.404.782l11.314 11.314-2.122 2.122L.282 2.904z" />
      <path d="M.282 12.096L11.596.782l2.122 2.122L2.404 14.218z" />
    </g>
  ),
});

export const MasterCraft = createIcon({
  displayName: 'MasterCraft',
  viewBox: '0 0 56 56',

  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: (
    <g fill="none" fill-rule="evenodd">
      <circle fill="#000" cx="28" cy="28" r="28" />
      <g fill-rule="nonzero">
        <path
          d="M15.565 28.565a1.93 1.93 0 012.606-.113l.122.113 10.142 10.142a1.93 1.93 0 01-2.606 2.84l-.122-.112-10.142-10.142a1.93 1.93 0 010-2.728z"
          fill="#444"
        />
        <path
          d="M36.19 17.48c1.006-.996 2.706-.34 2.805 1.026l.005.126v10.736c0 .9-.737 1.629-1.646 1.629a1.64 1.64 0 01-1.642-1.507l-.005-.122v-6.805l-8.043 7.957c-1.006.996-2.707.34-2.806-1.026l-.004-.126v-6.805L16.81 30.52a1.66 1.66 0 01-2.224.095l-.105-.095a1.616 1.616 0 01-.096-2.2l.096-.103L25.336 17.48c1.006-.996 2.707-.34 2.806 1.026l.004.126v6.804l8.043-7.956z"
          fill="#FFF"
        />
      </g>
    </g>
  ),
});

export const Bookmark = createIcon({
  displayName: 'Bookmark',
  viewBox: '0 0 56 56',

  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: (
    <g fill="none" fill-rule="evenodd">
      <circle fill="#2F2F2F" cx="28" cy="28" r="28" />
      <path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z" />
    </g>
  ),
});

export const Check = createIcon({
  displayName: 'Check',
  viewBox: '0 0 64 64',

  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: (
    <g fill="none" fill-rule="evenodd">
      <circle fill="#3CB3AB" cx="32" cy="32" r="32" />
      <path stroke="#FFF" stroke-width="5" d="M20 31.86L28.093 40 44 24" />
    </g>
  ),
});
