pragma solidity 0.5.9;

contract RealStateRegister {
    
    struct Imovel {
        string nomeProprietario;
        string caracteristicas;
        string enderecoRua;
        string cidade;
        string estado;
        uint metragem;
        uint valorVenal;
    }
    
    Imovel[] public livro1;
    mapping(string => Imovel) public livro2;
    mapping(string => Imovel) public livro3;
    mapping(string => Imovel) public livro4;
    mapping(string => Imovel) public livro5;
    mapping(string => Imovel) public livro6;
    mapping(uint => Imovel) public livro7;
    mapping(uint => Imovel) public livro8;
    
    function registraImovel(
        string memory paramNomeProprietario,
        string memory paramCaracteristicas,
        string memory paramEnderecoRua,
        string memory paramCidade,
        string memory paramEstado,
        uint paramMetragem,
        uint paramValorVenal) public {
        Imovel memory novoImovel = Imovel(
            paramNomeProprietario,
            paramCaracteristicas,
            paramEnderecoRua,
            paramCidade,
            paramEstado,
            paramMetragem,
            paramValorVenal);
            
        livro1.push(novoImovel);
        livro2[paramNomeProprietario] = novoImovel;
        livro3[paramCaracteristicas] = novoImovel;
        livro4[paramEnderecoRua] = novoImovel;
        livro5[paramCidade] = novoImovel;
        livro6[paramEstado] = novoImovel;
        livro7[paramMetragem] = novoImovel;
        livro8[paramValorVenal] = novoImovel;
    }
    
    function devolveTudo(uint matricula) public view returns
        (string memory, string memory, string memory, string memory, string memory, uint256, uint256)
    {
        return (livro1[matricula].nomeProprietario,
        livro1[matricula].caracteristicas,
        livro1[matricula].enderecoRua,
        livro1[matricula].cidade,
        livro1[matricula].estado,
        livro1[matricula].metragem,
        livro1[matricula].valorVenal);
    }
}
