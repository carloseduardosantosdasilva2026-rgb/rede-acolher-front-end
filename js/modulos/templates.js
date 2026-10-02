// Fragmentos HTML reutilizados pelas rotas da aplicação.
window.RedeAcolher = window.RedeAcolher || {};
RedeAcolher.templates = {
  inicio: `
      <section class="apresentacao" aria-labelledby="titulo-inicio">
        <div class="container">
          <div>
            <h1 id="titulo-inicio">Conheça a Rede Acolher</h1>
            <p class="introducao">A Rede Acolher é uma ONG fictícia que propõe ações de educação, alimentação e convivência. Este site apresenta a organização, seus projetos e um formulário para quem deseja participar.</p>
            <div class="acoes">
              <a class="botao" href="#cadastro">Faça parte dessa rede</a>
              <a class="link" href="#projetos">Conheça os projetos</a>
            </div>
            <p class="legenda">Site acadêmico de uma organização fictícia.</p>
          </div>
          <figure class="ilustracao">
            <picture>
              <source srcset="../imagens/comunidade.webp" type="image/webp">
              <source srcset="../imagens/comunidade.png" type="image/png">
              <img src="../imagens/comunidade.svg" width="640" height="520" alt="Ilustração de pessoas reunidas ao redor de uma mesa, com livros e alimentos.">
            </picture>
            <figcaption>Ilustração de uma atividade comunitária.</figcaption>
          </figure>
        </div>
      </section>
      <section class="sobre" aria-labelledby="titulo-quem">
        <div class="container">
          <div>
            <h2 id="titulo-quem">Quem somos</h2>
          </div>
          <div>
            <p>A Rede Acolher é uma organização fictícia do terceiro setor criada para este projeto acadêmico. Sua proposta é fortalecer vínculos e ampliar o acesso a oportunidades em comunidades brasileiras.</p>
            <p>Nossa missão é acolher famílias e promover autonomia, respeitando a diversidade e incentivando a participação de moradores, voluntários e apoiadores.</p>
          </div>
        </div>
      </section>
      <section class="container" id="contato" aria-labelledby="titulo-contato">
        <h2 id="titulo-contato">Contato</h2>
        <p>Para conhecer as formas de participação, consulte os contatos abaixo ou preencha o cadastro.</p>
        <address>
          <p>E-mail: <a href="mailto:contato@redeacolher.example">contato@redeacolher.example</a></p>
          <p>Telefone: (11) 0000-0000</p>
          <p>Endereço: Rua Exemplo, 100 — São Paulo/SP</p>
        </address>
        <p class="nota">Dados de contato fictícios, usados somente para demonstrar a estrutura do site acadêmico.</p>
        <a href="#cadastro">Preencher cadastro de participação</a>
      </section>
      <section class="container secao" aria-labelledby="titulo-frentes">
        <div class="titulo-secao">
          <div>
            <h2 id="titulo-frentes">Áreas de atuação</h2>
          </div>
          <a class="link" href="#projetos">Ver iniciativas</a>
        </div>
        <div class="areas">
          <article class="area">
            <h3>Aprender e compartilhar</h3>
            <p>Apoio à leitura e oficinas que ajudam crianças e jovens a descobrir novas possibilidades.</p>
            <a href="#projetos/educacao">Conheça o projeto de educação</a>
          </article>
          <article class="area">
            <h3>Alimentar com cuidado</h3>
            <p>Mobilização comunitária para compartilhar alimentos e conversar sobre alimentação.</p>
            <a href="#projetos/alimentacao">Conheça o projeto de alimentação</a>
          </article>
          <article class="area">
            <h3>Criar laços</h3>
            <p>Encontros de convivência que aproximam gerações e fortalecem redes de apoio.</p>
            <a href="#projetos/convivencia">Conheça o projeto de convivência</a>
          </article>
        </div>
      </section>
      <section class="container convite" aria-labelledby="titulo-convite">
        <div>
          <h2 id="titulo-convite">Como participar</h2>
          <p>Compartilhe seu tempo, suas habilidades ou seu interesse em apoiar as iniciativas.</p>
        </div>
        <a class="botao" href="#cadastro">Quero participar</a>
      </section>
    `,
  projetos: `
      <div class="container abertura">
        <h1>Projetos sociais</h1>
        <p class="introducao">Três frentes, um propósito: criar oportunidades e fortalecer a vida em comunidade. Conheça a proposta de cada projeto e as formas de participar.</p>
        <div class="campo"><label for="busca-projetos">Buscar projeto</label><input id="busca-projetos" type="search" maxlength="100" placeholder="Nome, categoria ou atividade"><p id="quantidade-projetos" role="status" aria-live="polite"></p></div><nav class="atalhos" aria-label="Projetos nesta página">
          <ul>
            <li><a href="#projetos/educacao">Educação</a></li>
            <li><a href="#projetos/alimentacao">Alimentação</a></li>
            <li><a href="#projetos/convivencia">Convivência</a></li>
            <li><a href="#projetos/voluntariado">Voluntariado</a></li>
            <li><a href="#projetos/doacoes">Doações</a></li>
          </ul>
        </nav>
      </div>
      <section class="container projetos secao" aria-labelledby="titulo-projetos">
        <h2 id="titulo-projetos">Projetos da Rede Acolher</h2><template id="modelo-projeto">
  <article class="projeto">
    <span class="badge"></span>
    <picture><source srcset="../imagens/educacao.webp" type="image/webp"><source srcset="../imagens/educacao.png" type="image/png"><img src="../imagens/educacao.svg" width="480" height="360" alt=""></picture>
    <div><h3>Nome do projeto</h3><p></p><dl><dt>Público</dt><dd></dd><dt>Atividades propostas</dt><dd></dd><dt>Como ajudar</dt><dd></dd></dl><a class="botao"></a></div>
  </article>
</template>
        
        
        
      </section>
      <section class="container" id="voluntariado" aria-labelledby="titulo-voluntariado">
        <h2 id="titulo-voluntariado">Trabalho voluntário</h2>
        <p>Você pode colaborar com seu tempo e suas habilidades nas atividades dos projetos.</p>
        <ul>
          <li>Educação: apoiar a leitura e ajudar nas oficinas.</li>
          <li>Alimentação: organizar campanhas e preparar cestas.</li>
          <li>Convivência: ajudar nos encontros e nas atividades culturais.</li>
        </ul>
        <p>Para demonstrar interesse, escolha a opção de voluntariado no cadastro, indique um projeto e informe sua disponibilidade.</p>
        <a class="botao" href="#cadastro">Cadastrar interesse em voluntariado</a>
      </section>
      <section class="container" id="doacoes" aria-labelledby="titulo-doacoes">
        <h2 id="titulo-doacoes">Campanhas de doação</h2>
        <p>A proposta da ONG prevê campanhas para reunir alimentos, materiais educativos e recursos financeiros destinados às atividades sociais.</p>
        <h3>Como as campanhas seriam organizadas</h3>
        <ol>
          <li>Divulgar o objetivo da campanha e os itens ou recursos necessários.</li>
          <li>Orientar os apoiadores sobre o recebimento e registrar as contribuições.</li>
          <li>Destinar as doações ao projeto indicado e apresentar uma prestação de contas.</li>
        </ol>
        <h3>Como demonstrar interesse em contribuir</h3>
        <p>No cadastro, selecione a opção de doador, escolha um projeto e descreva na mensagem se deseja apoiar com alimentos, materiais ou uma contribuição financeira.</p>
        <p class="nota">Esta é uma proposta acadêmica de uma ONG fictícia. Não há pagamento ou recebimento de doações reais neste site.</p>
        <a class="botao" href="#cadastro">Cadastrar interesse em apoiar uma campanha</a>
      </section>
      <section class="container convite" aria-labelledby="titulo-participar">
        <div>
          <h2 id="titulo-participar">Participe dos projetos</h2>
          <p>O cadastro permite demonstrar interesse em voluntariado, apoio como doador ou nas duas formas de colaboração.</p>
        </div>
        <a class="botao" href="#cadastro">Preencher cadastro</a>
      </section>
    `,
  cadastro: `
      <div class="container abertura">
        <h1>Cadastro de participação</h1>
        <p class="introducao">Demonstre interesse em ser voluntário, doador ou nas duas formas de apoio. Comece contando um pouco sobre você.</p>
      </div>
      <div class="container cadastro-layout">
        <aside class="painel" aria-labelledby="titulo-orientacoes">
          <h2 id="titulo-orientacoes">Orientações para o cadastro</h2>
          <ol>
            <li>Informe seus dados de identificação e contato.</li>
            <li>Preencha seu endereço.</li>
            <li>Escolha como e em qual projeto deseja participar.</li>
          </ol>
          <p class="aviso"><strong>Esta é uma demonstração acadêmica.</strong> Use somente dados de teste. Os dados pessoais ficam apenas nos campos desta página. Somente as escolhas de participação, projeto e disponibilidade são salvas neste navegador após a simulação. Nenhuma inscrição ou doação real será realizada.</p>
          <p>Os campos com asterisco (*) são obrigatórios. As máscaras são aplicadas enquanto você digita.</p>
          <a href="#projetos">Consultar os projetos</a>
          <button type="button" class="botao botao-secundario abrir-modal" hidden>Sobre esta demonstração</button>
        </aside>
        <section class="formulario-area" aria-labelledby="titulo-formulario">
          <h2 id="titulo-formulario">Cadastro de participação</h2>
          <noscript>
            <p class="aviso">Ative o JavaScript para testar as máscaras, as validações adicionais e a conclusão desta simulação. A navegação do site continua disponível.</p>
          </noscript>
          <p id="alerta-formulario" class="alerta alerta-erro" role="alert" hidden>Confira os campos indicados. Há dados obrigatórios vazios ou inválidos.</p>
          <p id="preferencias-status" role="status" aria-live="polite"></p><button id="esquecer-preferencias" class="botao botao-secundario" type="button" hidden>Esquecer preferências salvas</button><form id="formulario-cadastro" action="cadastro.html" method="post">
            <fieldset>
              <legend>1. Dados pessoais</legend>
              <div class="campos">
                <div class="campo">
                  <label for="nome">Nome completo *</label>
                  <input
                    id="nome"
                    name="nome"
                    type="text"
                    autocomplete="name"
                    minlength="3"
                    maxlength="100"
                    required
                    aria-describedby="nome-erro">
                  <span class="erro" id="nome-erro" aria-live="polite"></span>
                </div>
                <div class="campo">
                  <label for="email">E-mail *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    maxlength="150"
                    required
                    aria-describedby="email-ajuda email-erro">
                  <small id="email-ajuda">Use um endereço como nome@exemplo.com.</small>
                  <span class="erro" id="email-erro" aria-live="polite"></span>
                </div>
                <div class="campo">
                  <label for="cpf">CPF *</label>
                  <input
                    id="cpf"
                    name="cpf"
                    type="text"
                    inputmode="numeric"
                    maxlength="14"
                    pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}"
                    title="CPF no formato 000.000.000-00"
                    required
                    aria-describedby="cpf-ajuda cpf-erro">
                  <small id="cpf-ajuda">Digite 11 números. Formato: 000.000.000-00.</small>
                  <span class="erro" id="cpf-erro" aria-live="polite"></span>
                </div>
                <div class="campo">
                  <label for="telefone">Telefone com DDD *</label>
                  <input
                    id="telefone"
                    name="telefone"
                    type="tel"
                    autocomplete="tel"
                    inputmode="tel"
                    maxlength="15"
                    pattern="\\([0-9]{2}\\) [0-9]{4,5}-[0-9]{4}"
                    title="Telefone com DDD no formato (11) 91234-5678 ou (11) 2345-6789"
                    required
                    aria-describedby="telefone-ajuda telefone-erro">
                  <small id="telefone-ajuda">Celular: (11) 91234-5678. Fixo: (11) 2345-6789.</small>
                  <span class="erro" id="telefone-erro" aria-live="polite"></span>
                </div>
                <div class="campo">
                  <label for="nascimento">Data de nascimento *</label>
                  <input
                    id="nascimento"
                    name="nascimento"
                    type="date"
                    autocomplete="bday"
                    min="1900-01-01"
                    required
                    aria-describedby="nascimento-ajuda nascimento-erro">
                  <small id="nascimento-ajuda">Informe uma data entre 01/01/1900 e hoje.</small>
                  <span class="erro" id="nascimento-erro" aria-live="polite"></span>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend>2. Endereço</legend>
              <div class="campos">
                <div class="campo">
                  <label for="cep">CEP *</label>
                  <input
                    id="cep"
                    name="cep"
                    type="text"
                    autocomplete="postal-code"
                    inputmode="numeric"
                    maxlength="9"
                    pattern="[0-9]{5}-[0-9]{3}"
                    title="CEP no formato 00000-000"
                    required
                    aria-describedby="cep-ajuda cep-erro">
                  <small id="cep-ajuda">Digite 8 números. Formato: 00000-000.</small>
                  <span class="erro" id="cep-erro" aria-live="polite"></span>
                </div>
                <div class="campo">
                  <label for="logradouro">Rua, avenida ou outro logradouro *</label>
                  <input
                    id="logradouro"
                    name="logradouro"
                    type="text"
                    autocomplete="address-line1"
                    minlength="3"
                    maxlength="120"
                    required
                    aria-describedby="logradouro-erro">
                  <span class="erro" id="logradouro-erro" aria-live="polite"></span>
                </div>
                <div class="campo">
                  <label for="numero">Número *</label>
                  <input id="numero" name="numero" type="text" maxlength="15" required aria-describedby="numero-ajuda numero-erro">
                  <small id="numero-ajuda">Se não houver número, escreva S/N.</small>
                  <span class="erro" id="numero-erro" aria-live="polite"></span>
                </div>
                <div class="campo">
                  <label for="complemento">Complemento (opcional)</label>
                  <input
                    id="complemento"
                    name="complemento"
                    type="text"
                    autocomplete="address-line2"
                    maxlength="80"
                    aria-describedby="complemento-erro">
                  <span class="erro" id="complemento-erro" aria-live="polite"></span>
                </div>
                <div class="campo">
                  <label for="bairro">Bairro *</label>
                  <input id="bairro" name="bairro" type="text" minlength="2" maxlength="80" required aria-describedby="bairro-erro">
                  <span class="erro" id="bairro-erro" aria-live="polite"></span>
                </div>
                <div class="campo">
                  <label for="cidade">Cidade *</label>
                  <input
                    id="cidade"
                    name="cidade"
                    type="text"
                    autocomplete="address-level2"
                    minlength="2"
                    maxlength="80"
                    required
                    aria-describedby="cidade-erro">
                  <span class="erro" id="cidade-erro" aria-live="polite"></span>
                </div>
                <div class="campo">
                  <label for="estado">Estado *</label>
                  <select id="estado" name="estado" autocomplete="address-level1" required aria-describedby="estado-erro">
                    <option value="">Selecione</option>
                    <option value="AC">AC — Acre</option>
                    <option value="AL">AL — Alagoas</option>
                    <option value="AP">AP — Amapá</option>
                    <option value="AM">AM — Amazonas</option>
                    <option value="BA">BA — Bahia</option>
                    <option value="CE">CE — Ceará</option>
                    <option value="DF">DF — Distrito Federal</option>
                    <option value="ES">ES — Espírito Santo</option>
                    <option value="GO">GO — Goiás</option>
                    <option value="MA">MA — Maranhão</option>
                    <option value="MT">MT — Mato Grosso</option>
                    <option value="MS">MS — Mato Grosso do Sul</option>
                    <option value="MG">MG — Minas Gerais</option>
                    <option value="PA">PA — Pará</option>
                    <option value="PB">PB — Paraíba</option>
                    <option value="PR">PR — Paraná</option>
                    <option value="PE">PE — Pernambuco</option>
                    <option value="PI">PI — Piauí</option>
                    <option value="RJ">RJ — Rio de Janeiro</option>
                    <option value="RN">RN — Rio Grande do Norte</option>
                    <option value="RS">RS — Rio Grande do Sul</option>
                    <option value="RO">RO — Rondônia</option>
                    <option value="RR">RR — Roraima</option>
                    <option value="SC">SC — Santa Catarina</option>
                    <option value="SP">SP — São Paulo</option>
                    <option value="SE">SE — Sergipe</option>
                    <option value="TO">TO — Tocantins</option>
                  </select>
                  <span class="erro" id="estado-erro" aria-live="polite"></span>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend>3. Participação</legend>
              <div class="campos">
                <div class="campo">
                  <label for="participacao">Como você quer participar? *</label>
                  <select id="participacao" name="participacao" required aria-describedby="participacao-erro">
                    <option value="">Selecione</option>
                    <option value="voluntario">Como voluntário</option>
                    <option value="doador">Como doador</option>
                    <option value="ambos">Como voluntário e doador</option>
                  </select>
                  <span class="erro" id="participacao-erro" aria-live="polite"></span>
                </div>
                <div class="campo">
                  <label for="projeto">Projeto de interesse *</label>
                  <select id="projeto" name="projeto" required aria-describedby="projeto-erro">
                    <option value="">Selecione</option>
                    <option value="educacao">Aprender Juntos</option>
                    <option value="alimentacao">Mesa Compartilhada</option>
                    <option value="convivencia">Laços da Comunidade</option>
                    <option value="todos">Ainda não tenho preferência</option>
                  </select>
                  <span class="erro" id="projeto-erro" aria-live="polite"></span>
                </div>
                <div class="campo">
                  <label for="disponibilidade" id="label-disponibilidade">Disponibilidade (opcional)</label>
                  <select id="disponibilidade" name="disponibilidade" aria-describedby="disponibilidade-ajuda disponibilidade-erro">
                    <option value="">Selecione</option>
                    <option value="semana-manha">Durante a semana, de manhã</option>
                    <option value="semana-tarde">Durante a semana, à tarde</option>
                    <option value="semana-noite">Durante a semana, à noite</option>
                    <option value="fim-semana">Nos fins de semana</option>
                    <option value="combinar">A combinar</option>
                  </select>
                  <small id="disponibilidade-ajuda">Obrigatória para quem escolhe voluntariado. Opcional para doadores.</small>
                  <span class="erro" id="disponibilidade-erro" aria-live="polite"></span>
                </div>
                <div class="campo">
                  <label for="mensagem">Habilidades ou forma de apoio (opcional)</label>
                  <textarea id="mensagem" name="mensagem" rows="4" maxlength="600" aria-describedby="mensagem-ajuda mensagem-erro">
                  </textarea>
                  <small id="mensagem-ajuda">Conte como gostaria de ajudar, em até 600 caracteres.</small>
                  <span class="erro" id="mensagem-erro" aria-live="polite"></span>
                </div>
              </div>
            </fieldset>
            <div class="campo confirmacao">
              <label for="confirmacao">
                <input id="confirmacao" name="confirmacao" type="checkbox" value="ciente" required aria-describedby="confirmacao-erro">
                <span>Estou ciente de que este cadastro é uma simulação acadêmica e estou utilizando dados de teste. *</span>
              </label>
              <span class="erro" id="confirmacao-erro" aria-live="polite"></span>
            </div>
            <div class="acoes">
              <button id="concluir" class="botao" type="submit" disabled>
                Concluir simulação
              </button>
              <button class="botao botao-secundario" type="reset">
                Limpar campos
              </button>
            </div>
          </form>
          <div id="resultado" class="resultado" role="status" tabindex="-1" hidden>
          </div>
        </section>
      </div>
    `,
};
