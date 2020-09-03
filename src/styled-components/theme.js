const pallete = {
  primaryColor: {
    shade_0: '#445050',
    shade_1: '#373D3D',
    shade_2: '#1A3636',
    shade_3: '#B7C5C5',
    shade_4: '#a8b3b3',
    shade_5: '#9da7a7'
  },
  secondaryColor: {
    shade_0: '#52525C',
    shade_1: '#414147',
    shade_2: '#1F1F3F',
    shade_3: '#C3C3D1',
    shade_4: '#C9C9D1'
  },
  secondaryColor_2: {
    shade_0: '#6D7566',
    shade_1: '#565B52',
    shade_2: '#395027',
    shade_3: '#CFD8C7',
    shade_4: '#D3D8CE'
  },
  complementColor: {
    shade_0: '#847B73',
    shade_1: '#66615C',
    shade_2: '#5A412B',
    shade_3: '#DCD2CA',
    shade_4: '#DCD7D2'
  },
  textColor: {
    white: '#FFFFFF',
    black: '#000000'
  },
  actionColor: {
    open: '#008000',
    closed: '#108496',
    assign: '#008000',
    unassign: '#FFC108',
    unassign_2: '#ffff00',
    assigned: '#808080'
  }
};

const theme = {
  color: {
    mainBgColor: pallete.primaryColor.shade_0,
    topBarBgColor: pallete.primaryColor.shade_1,

    primaryTextColor: pallete.textColor.white,
    secondaryTextColor: pallete.textColor.black,

    ticketHeaderColor: pallete.primaryColor.shade_1,
    ticketColor: pallete.primaryColor.shade_3,
    ticketColor_2: pallete.primaryColor.shade_4,
    ticketColorHover: pallete.primaryColor.shade_5,

    ticketOpen: pallete.actionColor.open,
    ticketClosed: pallete.actionColor.closed,

    assign: pallete.actionColor.assign,
    assigned: pallete.actionColor.assigned,
    unassign: pallete.actionColor.unassign
  },

  fontStyles: {
    navBarFont: "'Open Sans', sans-serif"
  },

  fontSizing: {
    l: '2rem',
    m: '1.6rem',
    s: '1.2rem'
  },

  device: {
    desktop: '(max-width: 1000px)',
    tablet: '(max-width: 800px)',
    mobile: '(max-width: 500px)'
  },

  flex: (direction = 'row', align = 'normal', justify = 'normal') => `{
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
  }`
};

export default theme;

export const {
  color,
  fontStyles,
  fontSizing,
  breakpoints,
  flex,
  device
} = theme;
