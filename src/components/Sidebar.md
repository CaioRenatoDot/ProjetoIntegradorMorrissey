# Sidebar

Barra lateral com logo, navegacao principal, dados da sessao e botao de saida.

## Uso

```jsx
<Sidebar
  activeItem="Dashboard"
  title="Caio"
  subtitle="Administrador"
  email="caio@cwork.com"
  onLogout={logout}
  onSelectItem={handleSelect}
  isCollapsed={isCollapsed}
  onToggleCollapse={toggleSidebar}
/>
```

## Props

- `title`: nome exibido no card da sessao.
- `subtitle`: complemento do usuario ou plano.
- `email`: e-mail da sessao.
- `onLogout`: acao do botao sair.
- `activeItem`: item ativo da navegacao.
- `onSelectItem`: recebe o label do item clicado.
- `isCollapsed`: controla a versao recolhida.
- `onToggleCollapse`: alterna entre expandida e recolhida.

## Acessibilidade

- O `<aside>` possui `aria-label`.
- A navegacao usa `<nav aria-label="Navegacao principal">`.
- O item ativo usa `aria-current="page"`.
- Botoes de recolher/expandir possuem `aria-label`.
