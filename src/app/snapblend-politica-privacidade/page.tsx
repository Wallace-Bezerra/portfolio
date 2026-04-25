import React from 'react';
import * as S from '../styles';
import SnapBlend from '@/components/SnapBlend';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidade | SnapBlend',
  description:
    'Política de privacidade do aplicativo SnapBlend, com informações sobre dados, serviços de terceiros, assinaturas, anúncios e contato.',
  alternates: {
    canonical: '/snapblend-politica-privacidade',
  },
};

const Politica = () => {
  return <SnapBlend />;
};

export default Politica;
