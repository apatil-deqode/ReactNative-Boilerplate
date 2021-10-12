import React from 'react';
import {Text, StyleSheet} from 'react-native';

export const H1 = ({children, style, ...props}) => {
  return (
    <Text {...props} style={[styles.h1, style]}>
      {children}
    </Text>
  );
};
export const H2 = ({children, style, ...props}) => {
  return (
    <Text {...props} style={[styles.h2, style]}>
      {children}
    </Text>
  );
};
export const H3 = ({children, style, ...props}) => {
  return (
    <Text {...props} style={[styles.h3, style]}>
      {children}
    </Text>
  );
};
export const H4 = ({children, style, ...props}) => {
  return (
    <Text {...props} style={[styles.h4, style]}>
      {children}
    </Text>
  );
};
export const H5 = ({children, style, ...props}) => {
  return (
    <Text {...props} style={[styles.h5, style]}>
      {children}
    </Text>
  );
};
export const H6 = ({children, style, ...props}) => {
  return (
    <Text {...props} style={[styles.h6, style]}>
      {children}
    </Text>
  );
};
export const Caption = ({children, style, ...props}) => {
  return (
    <Text {...props} style={[styles.caption, style]}>
      {children}
    </Text>
  );
};
export const P1 = ({children, style, ...props}) => {
  return (
    <Text {...props} style={[styles.p1, style]}>
      {children}
    </Text>
  );
};
export const P1_500 = ({children, style, ...props}) => {
  return (
    <Text {...props} style={[styles.p1_500, style]}>
      {children}
    </Text>
  );
};
export const P1_700 = ({children, style, ...props}) => {
  return (
    <Text {...props} style={[styles.p1_700, style]}>
      {children}
    </Text>
  );
};
export const P2 = ({children, style, ...props}) => {
  return (
    <Text {...props} style={[styles.p2, style]}>
      {children}
    </Text>
  );
};
export const P2_500 = ({children, style, ...props}) => {
  return (
    <Text {...props} style={[styles.p2_500, style]}>
      {children}
    </Text>
  );
};
export const P2_700 = ({children, style, ...props}) => {
  return (
    <Text {...props} style={[styles.p2_700, style]}>
      {children}
    </Text>
  );
};
export const P3 = ({children, style, ...props}) => {
  return (
    <Text {...props} style={[styles.p3, style]}>
      {children}
    </Text>
  );
};
export const P3_500 = ({children, style, ...props}) => {
  return (
    <Text {...props} style={[styles.p3_500, style]}>
      {children}
    </Text>
  );
};
export const P3_700 = ({children, style, ...props}) => {
  return (
    <Text {...props} style={[styles.p3_700, style]}>
      {children}
    </Text>
  );
};
export const P4_700 = ({children, style, ...props}) => {
  return (
    <Text {...props} style={[styles.p4_700, style]}>
      {children}
    </Text>
  );
};

export const Label = ({children, style, ...props}) => {
  return (
    <Text {...props} style={[styles.label, style]}>
      {children}
    </Text>
  );
};
export const Assistive = ({children, style, ...props}) => {
  return (
    <Text {...props} style={[styles.assistive, style]}>
      {children}
    </Text>
  );
};

export const PrimaryButtonText = ({children, style, ...props}) => {
  return (
    <Text {...props} style={[styles.primaryButton, style]}>
      {children}
    </Text>
  );
};

export const SecondaryButtonText = ({children, style, ...props}) => {
  return (
    <Text {...props} style={[styles.secondaryButton, style]}>
      {children}
    </Text>
  );
};

export const NavigationTitleText = ({children, style, ...props}) => {
  return (
    <Text {...props} style={[styles.navigationTitle, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontFamily: 'PTRootUI-Regular',
    fontWeight: 'bold',
    fontSize: 48,
    lineHeight: 64,
    letterSpacing: 0,
  },
  h2: {
    fontFamily: 'PTRootUI-Regular',
    fontWeight: 'bold',
    fontSize: 38,
    lineHeight: 56,
    letterSpacing: 0,
  },
  h3: {
    fontFamily: 'PTRootUI-Regular',
    fontWeight: 'bold',
    fontSize: 28,
    lineHeight: 40,
    letterSpacing: 0,
  },
  h4: {
    fontFamily: 'PTRootUI-Regular',
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: 0,
  },
  h5: {
    fontFamily: 'PTRootUI-Regular',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  h6: {
    fontFamily: 'PTRootUI-Regular',
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.5,
  },
  caption: {
    fontFamily: 'PTRootUI-Regular',
    fontWeight: 'normal',
    fontSize: 11,
    lineHeight: 16,
    letterSpacing: 0.5,
  },
  p1: {
    fontFamily: 'PTRootUI-Regular',
    fontWeight: 'normal',
    fontSize: 20,
    lineHeight: 32,
    letterSpacing: -0.5,
  },
  p1_500: {
    fontFamily: 'PTRootUI-Regular',
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 32,
    letterSpacing: -0.5,
  },
  p1_700: {
    fontFamily: 'PTRootUI-Regular',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 32,
    letterSpacing: -0.5,
  },
  p2: {
    fontFamily: 'PTRootUI-Regular',
    fontWeight: 'normal',
    fontSize: 16,
    // lineHeight: 32,
    letterSpacing: -0.44,
  },
  p2_500: {
    fontFamily: 'PTRootUI-Regular',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 32,
    letterSpacing: -0.44,
  },
  p2_700: {
    fontFamily: 'PTRootUI-Regular',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 32,
    letterSpacing: -0.44,
  },
  p3: {
    fontFamily: 'PTRootUI-Regular',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: -0.38,
  },
  p3_500: {
    fontFamily: 'PTRootUI-Regular',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: -0.38,
  },
  p3_700: {
    fontFamily: 'PTRootUI-Regular',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: -0.38,
  },
  p4_700: {
    fontFamily: 'PTRootUI-Regular',
    fontWeight: '700',
    fontSize: 32,
    lineHeight: 40,
    letterSpacing: 0.37,
  },
  label: {
    fontFamily: 'PTRootUI-Regular',
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0,
  },
  assistive: {
    fontFamily: 'PTRootUI-Regular',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 12,
    letterSpacing: -0.38,
  },
  primaryButton: {
    fontFamily: 'PTRootUI-Regular',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  secondaryButton: {
    fontFamily: 'PTRootUI-Regular',
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 24,
    letterSpacing: 0,
  },
  navigationTitle: {
    fontFamily: 'PTRootUI-Regular',
    fontWeight: '700',
    fontSize: 22,
    lineHeight: 28,
    letterSpacing: 0,
  },
});
