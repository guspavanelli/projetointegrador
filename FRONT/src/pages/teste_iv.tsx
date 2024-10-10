function Form() {
   return (
     <div className="container">
       <div className="container-autenticacao" id="login">
         <div className="form-container logar-conta">
           <form>
             <h1 className="entrar">Entrar</h1>
             <img src="" alt="titulo-login" />
             <div className="container-input">
               <input type="text" name="usuario-nome" placeholder="nome@email.com" required />
               <img src="" alt="olhos" />
               <input type="password" name="usuario-senha" placeholder="*********" required />
             </div>
             <button type="button">Entrar</button>
             <a href="/esqueceu-senha">
               <label className="esqueceu-senha">Esqueceu a Senha?</label>
             </a>
             <span className="message-erro"></span>
             <span className="message-ok"></span>
           </form>
         </div>
         <div className="form-container criar-conta">
           <form>
             <h1>CRIE SUA CONTA</h1>
             <input type="text" name="user-name" placeholder="Nome Completo" required />
             <input type="text" name="user-cpf" placeholder="CPF / CNPJ" required />
             <input type="text" name="user-telefone" placeholder="Telefone" required />
             <input type="text" name="user-email" placeholder="nome@email.com" required />
             <input type="password" name="user-password" placeholder="Crie Sua Senha" required />
             <input type="password" name="user-confirm-password" placeholder="Confirme Sua Senha" required />
             <div className="aceitar-termos">
               <div className="aceitar">
                 <input type="checkbox" name="aceitar-termos-pf" />
               </div>
               <a href="/login"><label>aceitar os termos</label></a>
             </div>
             <button type="button">Cadastrar-Se</button>
             <span className="message-erro"></span>
             <span className="message-ok"></span>
           </form>
         </div>
         <div className="toggle-container">
           <div className="toggle">
             <div className="toggle-panel toggle-left">
               <h1>Login</h1>
               <p>Se mantenha conectado fazendo login com suas informações</p>
               <button type="button" className="hidden">Login</button>
             </div>
             <div className="toggle-panel toggle-right">
               <h1>Criar Sua Conta</h1>
               <p>Crie sua conta, e venha fazer parte da nossa Família!</p>
               <button type="button" className="hidden">Criar Uma Conta</button>
             </div>
           </div>
         </div>
       </div>
     </div>
   );
 }
 
 export default Form;
 