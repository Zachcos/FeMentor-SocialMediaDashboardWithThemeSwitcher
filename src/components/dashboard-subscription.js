import React, { useContext } from 'react';
import styled from 'styled-components';

import { AppStateContext } from '../app-context';
import { SectionHeading } from './index';

export const DashboardSubscrption = () => {
  console.log('This is the subscription dashboard');

  return (
    <div className="container">
      <SectionHeading>Overview - Today</SectionHeading>
      <p>data will go here</p>
    </div>
  );
};
