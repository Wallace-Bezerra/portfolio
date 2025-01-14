'use client';
import * as S from './styles';

export default function SnapBlend() {
  return (
    <S.Container>
      <S.Title>Política de Privacidade</S.Title>

      <S.Paragraph>
        <strong>Última atualização:</strong> 14 de janeiro de 2025
        <br />
        <strong>Desenvolvedor:</strong> Wallace Bezerra da Silva
        <br />
        <strong>Contato:</strong>{' '}
        <S.Link href="mailto:wallace_2014_@hotmail.com">
          wallace_2014_@hotmail.com
        </S.Link>
      </S.Paragraph>

      <S.SectionTitle>Sobre o SnapBlend</S.SectionTitle>
      <S.Paragraph>
        O aplicativo <strong>SnapBlend</strong> foi desenvolvido para oferecer
        ferramentas criativas de edição de imagens e textos. Este serviço é
        fornecido &quot;como está &quot;, sem coleta direta de dados pessoais.
        Contudo, utilizamos serviços de terceiros que podem coletar dados para
        fornecer anúncios e gerenciar assinaturas.
      </S.Paragraph>

      <S.SectionTitle>Serviços de Terceiros</S.SectionTitle>
      <S.Paragraph>
        Os seguintes serviços de terceiros são utilizados:
        <S.List>
          <li>
            <strong>Google AdMob:</strong> Exibição de anúncios personalizados.
            Consulte a{' '}
            <S.Link
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Política de Privacidade do AdMob
            </S.Link>
            .
          </li>
          <li>
            <strong>RevenueCat:</strong> Gerenciamento de assinaturas. Consulte
            a{' '}
            <S.Link
              href="https://www.revenuecat.com/privacy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Política de Privacidade do RevenueCat
            </S.Link>
            .
          </li>
        </S.List>
      </S.Paragraph>

      <S.SectionTitle>Coleta e Uso de Dados</S.SectionTitle>
      <S.Paragraph>
        O SnapBlend não coleta informações pessoais diretamente. Os dados
        coletados pelos serviços de terceiros são utilizados para:
        <S.List>
          <li>Fornecer anúncios personalizados.</li>
          <li>Gerenciar e processar assinaturas.</li>
          <li>Melhorar a experiência do usuário.</li>
        </S.List>
      </S.Paragraph>

      <S.SectionTitle>Segurança</S.SectionTitle>
      <S.Paragraph>
        Embora nenhum método de transmissão de dados seja completamente seguro,
        confiamos nas medidas de segurança implementadas pelos serviços de
        terceiros para proteger as informações.
      </S.Paragraph>

      <S.SectionTitle>Contato</S.SectionTitle>
      <S.Paragraph>
        Caso tenha dúvidas ou sugestões sobre esta Política de Privacidade,
        entre em contato pelo e-mail:{' '}
        <S.Link href="mailto:wallace_2014_@hotmail.com">
          wallace_2014_@hotmail.com
        </S.Link>
        .
      </S.Paragraph>

      <S.SectionTitle>Cookies</S.SectionTitle>
      <S.Paragraph>
        O SnapBlend não utiliza cookies diretamente. No entanto, serviços de
        terceiros integrados ao aplicativo podem usar cookies para personalizar
        anúncios ou melhorar suas funcionalidades.
      </S.Paragraph>

      <S.SectionTitle>Privacidade Infantil</S.SectionTitle>
      <S.Paragraph>
        O SnapBlend não é direcionado a crianças menores de 13 anos. Não
        coletamos conscientemente informações pessoais de crianças. Caso você
        seja pai ou responsável e saiba que seu filho forneceu informações
        pessoais por meio de serviços de terceiros, entre em contato conosco
        para que possamos tomar as medidas necessárias.
      </S.Paragraph>

      <S.SectionTitle>Alterações</S.SectionTitle>
      <S.Paragraph>
        Esta Política de Privacidade pode ser atualizada periodicamente.
        Verifique esta página para acompanhar alterações.
      </S.Paragraph>
    </S.Container>
  );
}
