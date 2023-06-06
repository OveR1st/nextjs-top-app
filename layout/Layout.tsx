import React, { FunctionComponent } from 'react';
import cn from 'classnames';

import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';

import { LayoutProps } from './Layout.props';
import styles from './Button.module.css';

const Layout: React.FC<LayoutProps> = ({ children }): JSX.Element => {
  return (
    <>
      <Header />
      <div>
        <Sidebar />
        <div>{children}</div>
      </div>
      <Footer />
    </>
  );
};

export const withLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
