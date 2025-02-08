const Checkout = () => (
  <>
    <h3>Entrega</h3>
    <form>
      <label htmlFor="Recipient">Quem irá receber</label>
      <input id="Recipient" type="text" />
      <label htmlFor="Address">Endereço</label>
      <input id="Address" type="text" />
      <label htmlFor="City">Cidade</label>
      <input id="City" type="text" />
      <label htmlFor="CEP">CEP</label>
      <input id="CEP" type="number" />
      <label htmlFor="Number">Número</label>
      <input id="Number" type="number" />
      <label htmlFor="Complement">Complemento (opcional)</label>
      <input id="Complement" type="text" />
      <button>Continuar com o pagamento</button>
    </form>
    <button>Voltar para o carrinho</button>
  </>
)

export default Checkout
