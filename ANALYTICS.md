# Plano de análise da landing

## Funil mínimo

1. Impressões e cliques no anúncio: Meta Ads.
2. Sessões na landing: GA4 ou Meta Pixel.
3. Cliques na Play Store: evento `play_store_click`.
4. Instalações: Google Play Console, Firebase/GA4 app ou leitura do Install Referrer no app.

## Eventos enviados pela landing

- `landing_attribution`: enviado para o `dataLayer` com origem, campanha, clique e sessão.
- `landing_page_view`: page view enriquecido com dados de atribuição.
- `ViewContent`: evento padrão do Meta Pixel ao carregar a landing.
- `play_store_click`: clique em qualquer CTA para a Play Store.
- `generate_lead`: evento GA4 no clique da Play Store.
- `Lead`: evento padrão do Meta Pixel no clique da Play Store.
- `PlayStoreClick`: evento customizado do Meta Pixel no clique da Play Store.

## Link recomendado no anúncio

Use UTMs explícitas em cada criativo/anúncio:

```text
https://carmaunt.github.io/landing-concurseiro/?utm_source=meta&utm_medium=paid_social&utm_campaign=concurseiro_instagram_2026_07&utm_content={{ad.id}}_{{placement}}&utm_term={{adset.name}}
```

Se preferir algo manual:

```text
https://carmaunt.github.io/landing-concurseiro/?utm_source=instagram&utm_medium=paid_social&utm_campaign=concurseiro_teste_01&utm_content=post_questoes_cesgranrio
```

## O que comparar

- CTR do post/anúncio: impressões para visitas.
- Taxa de clique da landing: sessões para `play_store_click`.
- Taxa final estimada: `play_store_click` para instalações.

Com os números atuais:

- 2000 visualizações do post para 21 visitas no site = cerca de 1,05% de ida para a landing.
- 21 visitas para 1 download = cerca de 4,76% de conversão visita-download.

O gargalo principal parece estar antes da landing: o anúncio/post está gerando pouca visita. Mas ainda falta medir quantas dessas 21 pessoas clicaram na Play Store; sem esse evento, não dá para separar problema de landing, Play Store ou instalação.

## Para atribuir instalação ao anúncio

A landing agora envia o parâmetro `referrer` na URL da Play Store com:

- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_content`
- `utm_term`
- `cta_id`
- `landing_session_id`
- `fbclid` ou `gclid`, quando existirem

Para confirmar se uma instalação veio do anúncio, o app Android precisa ler o Google Play Install Referrer no primeiro uso e enviar esses dados para Firebase/GA4, backend ou outra ferramenta de analytics.
