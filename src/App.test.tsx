import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Manogna K V and portfolio sections', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: 'Manogna K V' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Projects' })).toBeInTheDocument();
  expect(screen.getByText('Library Management System')).toBeInTheDocument();
  expect(screen.getByText('Online Food Ordering System')).toBeInTheDocument();
  expect(screen.getByText('Shanthi S.S.K PU College, Pavagada')).toBeInTheDocument();
  expect(screen.getByText('Government Adarsha Vidyalaya, Pavagada')).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Java (Basic) Certificate' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Verify Java Basic certificate on HackerRank' })).toHaveAttribute(
    'href',
    'https://www.hackerrank.com/certificates/1abf5b08d342'
  );
  expect(screen.getByRole('img', { name: 'Manogna K V' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'View Library Management System on GitHub' })).toHaveAttribute(
    'href',
    'https://github.com/manognakv13-sudo/library-management-system'
  );
  expect(screen.getByRole('link', { name: 'View Online Food Ordering System on GitHub' })).toHaveAttribute(
    'href',
    'https://github.com/manognakv13-sudo/Online_Food_Ordering_System'
  );
});
