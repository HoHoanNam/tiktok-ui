import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
const defaultFn = () => {};

// onChange: Khi select từ cái này sang cái khác
function Menu({ children, items = [], onChange = defaultFn }) {
  const [history, setHistory] = useState([{ data: items }]);
  // Current menu
  const current = history[history.length - 1];

  useEffect(() => {
    console.log(history);
  }, [history]);

  const renderItems = () => {
    return current.data.map((item, index) => {
      // Convert item.children sang giá trị boolean
      const isParent = !!item.children;

      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              // console.log(item.children);
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  return (
    <Tippy
      interactive
      appendTo={() => document.body}
      // delay={[show, hide]}
      delay={[0, 700]}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('menu-popper')}>
            {history.length > 1 && (
              <Header
                title="Language"
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              />
            )}
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
