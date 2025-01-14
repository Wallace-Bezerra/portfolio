'use client';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  color: #333;
  margin-bottom: 100px;
  line-height: 1.6;
  font-family: 'Rubik', sans-serif;
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
  color: #fff;
`;

export const SectionTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  margin-top: 40px;
  margin-bottom: 20px;
  color: #fff;
`;

export const Paragraph = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  color: rgb(160, 159, 159);
`;

export const List = styled.ul`
  margin-left: 20px;
  margin-top: 10px;
  list-style: disc;
  font-size: 18px;

  li {
    margin-bottom: 10px;
  }
`;

export const Link = styled.a`
  color: #3dd8bc;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
