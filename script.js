// Atualizar hora em tempo real
function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    document.querySelector('.status-left').textContent = `${hours}:${minutes}`;
}

setInterval(updateTime, 1000);
updateTime();

// Alternar Sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    
    sidebar.classList.toggle('open');
    overlay.classList.toggle('open');
}

// Navegação
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remover classe active de todos os itens
        document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
        this.classList.add('active');
        
        // Mostrar seção correspondente
        const sectionId = this.dataset.section;
        showSection(sectionId);
        
        // Fechar sidebar em mobile
        if (window.innerWidth < 768) {
            toggleSidebar();
        }
    });
});

// Mostrar seção
function showSection(sectionId) {
    // Esconder todas as seções
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Mostrar seção selecionada
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.add('active');
    }
}

// Profile Menu
function toggleProfileMenu() {
    const menu = document.getElementById('profileMenu');
    menu.classList.toggle('open');
}

// Fechar profile menu ao clicar fora
document.addEventListener('click', function(e) {
    const menu = document.getElementById('profileMenu');
    const avatar = document.querySelector('.profile-avatar');
    
    if (!menu.contains(e.target) && !avatar.contains(e.target)) {
        menu.classList.remove('open');
    }
});

// Modal Functions
function openModal(content) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = content;
    modal.classList.add('open');
    document.getElementById('overlay').classList.add('open');
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('open');
    document.getElementById('overlay').classList.remove('open');
}

// Students Functions
function openAddStudent() {
    const content = `
        <h2>Adicionar Novo Aluno</h2>
        <form class="modal-form">
            <div class="form-group">
                <label>Nome</label>
                <input type="text" placeholder="Nome completo" required>
            </div>
            <div class="form-group">
                <label>Email</label>
                <input type="email" placeholder="Email" required>
            </div>
            <div class="form-group">
                <label>Telefone</label>
                <input type="tel" placeholder="Telefone" required>
            </div>
            <div class="form-group">
                <label>Data de Nascimento</label>
                <input type="date" required>
            </div>
            <div class="form-actions">
                <button type="submit" class="btn-primary">Adicionar</button>
                <button type="button" class="btn-small" onclick="closeModal()">Cancelar</button>
            </div>
        </form>
    `;
    openModal(content);
}

function editStudent(id) {
    alert(`Editar aluno ${id}`);
}

function deleteStudent(id) {
    if (confirm('Tem certeza que deseja deletar este aluno?')) {
        alert(`Aluno ${id} deletado`);
    }
}

function filterStudents() {
    const search = document.getElementById('studentSearch').value.toLowerCase();
    const students = document.querySelectorAll('.student-card');
    
    students.forEach(student => {
        const name = student.querySelector('h3').textContent.toLowerCase();
        const email = student.querySelector('p').textContent.toLowerCase();
        
        if (name.includes(search) || email.includes(search)) {
            student.style.display = 'block';
        } else {
            student.style.display = 'none';
        }
    });
}

// Evaluations Functions
function openAddEvaluation() {
    const content = `
        <h2>Nova Avaliação</h2>
        <form class="modal-form">
            <div class="form-group">
                <label>Aluno</label>
                <select required>
                    <option>Selecione um aluno</option>
                    <option>João Silva</option>
                    <option>Maria Santos</option>
                    <option>Pedro Costa</option>
                </select>
            </div>
            <div class="form-group">
                <label>Tipo de Avaliação</label>
                <select required>
                    <option>Selecione o tipo</option>
                    <option>Médica</option>
                    <option>Física</option>
                    <option>Técnica</option>
                    <option>Nutricional</option>
                </select>
            </div>
            <div class="form-group">
                <label>Data</label>
                <input type="date" required>
            </div>
            <div class="form-group">
                <label>Observações</label>
                <textarea placeholder="Observações" rows="4"></textarea>
            </div>
            <div class="form-actions">
                <button type="submit" class="btn-primary">Salvar</button>
                <button type="button" class="btn-small" onclick="closeModal()">Cancelar</button>
            </div>
        </form>
    `;
    openModal(content);
}

function filterEvaluations(type) {
    // Atualizar botões ativos
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Filtrar avaliações
    const evaluations = document.querySelectorAll('.evaluation-card');
    evaluations.forEach(evaluation => {
        if (type === 'all') {
            evaluation.style.display = 'block';
        } else {
            evaluation.style.display = evaluation.textContent.includes(type) ? 'block' : 'none';
        }
    });
}

function viewEvaluation(id) {
    alert(`Visualizar avaliação ${id}`);
}

function editEvaluation(id) {
    alert(`Editar avaliação ${id}`);
}

// Training Functions
function openAddTraining() {
    const content = `
        <h2>Novo Treino</h2>
        <form class="modal-form">
            <div class="form-group">
                <label>Dia da Semana</label>
                <select required>
                    <option>Segunda</option>
                    <option>Terça</option>
                    <option>Quarta</option>
                    <option>Quinta</option>
                    <option>Sexta</option>
                    <option>Sábado</option>
                    <option>Domingo</option>
                </select>
            </div>
            <div class="form-group">
                <label>Horário</label>
                <input type="time" required>
            </div>
            <div class="form-group">
                <label>Tipo de Treino</label>
                <input type="text" placeholder="Ex: Força, Cardio, Técnico" required>
            </div>
            <div class="form-group">
                <label>Instrutor</label>
                <input type="text" placeholder="Nome do instrutor" required>
            </div>
            <div class="form-actions">
                <button type="submit" class="btn-primary">Adicionar</button>
                <button type="button" class="btn-small" onclick="closeModal()">Cancelar</button>
            </div>
        </form>
    `;
    openModal(content);
}

// Programs Functions
function openAddProgram() {
    const content = `
        <h2>Novo Programa</h2>
        <form class="modal-form">
            <div class="form-group">
                <label>Nome do Programa</label>
                <input type="text" placeholder="Nome" required>
            </div>
            <div class="form-group">
                <label>Descrição</label>
                <textarea placeholder="Descrição" rows="4" required></textarea>
            </div>
            <div class="form-group">
                <label>Duração (semanas)</label>
                <input type="number" placeholder="Ex: 8" required>
            </div>
            <div class="form-group">
                <label>Objetivo</label>
                <input type="text" placeholder="Ex: Ganho de força" required>
            </div>
            <div class="form-actions">
                <button type="submit" class="btn-primary">Criar</button>
                <button type="button" class="btn-small" onclick="closeModal()">Cancelar</button>
            </div>
        </form>
    `;
    openModal(content);
}

function editProgram(id) {
    alert(`Editar programa ${id}`);
}

function viewProgram(id) {
    alert(`Visualizar programa ${id}`);
}

// Scouts Functions
function openAddScout() {
    const content = `
        <h2>Novo Scout</h2>
        <form class="modal-form">
            <div class="form-group">
                <label>Data do Jogo</label>
                <input type="date" required>
            </div>
            <div class="form-group">
                <label>Adversário</label>
                <input type="text" placeholder="Nome do time" required>
            </div>
            <div class="form-group">
                <label>Resultado</label>
                <input type="text" placeholder="Ex: 3 x 2" required>
            </div>
            <div class="form-group">
                <label>Alunos Avaliados</label>
                <textarea placeholder="Nomes dos alunos" rows="4" required></textarea>
            </div>
            <div class="form-actions">
                <button type="submit" class="btn-primary">Salvar</button>
                <button type="button" class="btn-small" onclick="closeModal()">Cancelar</button>
            </div>
        </form>
    `;
    openModal(content);
}

function viewScout(id) {
    alert(`Visualizar scout ${id}`);
}

// Products Functions
function openAddProduct() {
    const content = `
        <h2>Novo Produto</h2>
        <form class="modal-form">
            <div class="form-group">
                <label>Nome do Produto</label>
                <input type="text" placeholder="Nome" required>
            </div>
            <div class="form-group">
                <label>Descrição</label>
                <textarea placeholder="Descrição" rows="4" required></textarea>
            </div>
            <div class="form-group">
                <label>Preço</label>
                <input type="number" step="0.01" placeholder="R$ 0,00" required>
            </div>
            <div class="form-group">
                <label>Categoria</label>
                <select required>
                    <option>E-book</option>
                    <option>Vídeo</option>
                    <option>App</option>
                    <option>Curso</option>
                </select>
            </div>
            <div class="form-actions">
                <button type="submit" class="btn-primary">Adicionar</button>
                <button type="button" class="btn-small" onclick="closeModal()">Cancelar</button>
            </div>
        </form>
    `;
    openModal(content);
}

function editProduct(id) {
    alert(`Editar produto ${id}`);
}

// Feed Functions
function openAddPost() {
    const content = `
        <h2>Nova Notícia</h2>
        <form class="modal-form">
            <div class="form-group">
                <label>Título</label>
                <input type="text" placeholder="Título" required>
            </div>
            <div class="form-group">
                <label>Conteúdo</label>
                <textarea placeholder="Escreva sua notícia" rows="6" required></textarea>
            </div>
            <div class="form-group">
                <label>Visibilidade</label>
                <select required>
                    <option>Público</option>
                    <option>Apenas Alunos</option>
                    <option>Privado</option>
                </select>
            </div>
            <div class="form-actions">
                <button type="submit" class="btn-primary">Publicar</button>
                <button type="button" class="btn-small" onclick="closeModal()">Cancelar</button>
            </div>
        </form>
    `;
    openModal(content);
}

function editPost(id) {
    alert(`Editar post ${id}`);
}

function deletePost(id) {
    if (confirm('Tem certeza que deseja deletar este post?')) {
        alert(`Post ${id} deletado`);
    }
}

// Profile Functions
function editProfile() {
    const content = `
        <h2>Editar Perfil</h2>
        <form class="modal-form">
            <div class="form-group">
                <label>Nome</label>
                <input type="text" value="Carlos Silva" required>
            </div>
            <div class="form-group">
                <label>Email</label>
                <input type="email" value="carlos@mapafitsports.com" required>
            </div>
            <div class="form-group">
                <label>Telefone</label>
                <input type="tel" placeholder="Telefone" required>
            </div>
            <div class="form-group">
                <label>Especialidade</label>
                <input type="text" placeholder="Ex: Força, Cardio" required>
            </div>
            <div class="form-actions">
                <button type="submit" class="btn-primary">Salvar</button>
                <button type="button" class="btn-small" onclick="closeModal()">Cancelar</button>
            </div>
        </form>
    `;
    openModal(content);
    toggleProfileMenu();
}

function viewSettings() {
    const content = `
        <h2>Configurações</h2>
        <div class="settings-form">
            <div class="setting-item">
                <label>
                    <input type="checkbox" checked> Notificações por Email
                </label>
            </div>
            <div class="setting-item">
                <label>
                    <input type="checkbox" checked> Notificações por SMS
                </label>
            </div>
            <div class="setting-item">
                <label>
                    <input type="checkbox"> Tema Escuro
                </label>
            </div>
            <div class="setting-item">
                <label>Idioma</label>
                <select>
                    <option>Português</option>
                    <option>Inglês</option>
                    <option>Espanhol</option>
                </select>
            </div>
            <div class="form-actions">
                <button class="btn-primary" onclick="closeModal()">Salvar</button>
            </div>
        </div>
    `;
    openModal(content);
    toggleProfileMenu();
}

function logout() {
    if (confirm('Tem certeza que deseja sair?')) {
        alert('Você foi desconectado!');
        // Aqui você redirecionaria para a página de login
    }
}

// Adicionar estilos para formulários no modal
const formStyles = document.createElement('style');
formStyles.textContent = `
    .modal-form {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .form-group {
        display: flex;
        flex-direction: column;
        gap: 6px;
    }

    .form-group label {
        font-weight: 600;
        font-size: 13px;
        color: var(--text-primary);
    }

    .form-group input,
    .form-group select,
    .form-group textarea {
        padding: 10px;
        background-color: #1a1a1a;
        border: 2px solid var(--border-color);
        border-radius: 6px;
        color: var(--text-primary);
        font-size: 13px;
        font-family: inherit;
    }

    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
        outline: none;
        border-color: var(--accent-blue);
    }

    .form-actions {
        display: flex;
        gap: 8px;
        margin-top: 12px;
    }

    .settings-form {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .setting-item {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .setting-item label {
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
        font-size: 13px;
    }

    .setting-item input[type="checkbox"] {
        cursor: pointer;
    }

    .setting-item select {
        padding: 8px;
        background-color: #1a1a1a;
        border: 2px solid var(--border-color);
        border-radius: 6px;
        color: var(--text-primary);
        font-size: 13px;
    }
`;
document.head.appendChild(formStyles);

// Inicializar
console.log('MAPAFITSPORTS - Site do Treinador Carregado');

// Mostrar dashboard por padrão
showSection('dashboard');


// ===== FUNÇÕES DE UPLOAD DE FOTOS =====
let uploadedImage = null;

function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            uploadedImage = e.target.result;
            const preview = document.getElementById('imagePreview');
            if (preview) {
                preview.innerHTML = `<img src="${uploadedImage}" style="max-width: 100%; max-height: 200px; border-radius: 8px;">`;
            }
        };
        reader.readAsDataURL(file);
    }
}

// ===== FUNÇÕES DE POSTS =====
function openAddPost() {
    uploadedImage = null;
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <h2>Criar Nova Noticia</h2>
        <form onsubmit="savePost(event)">
            <div class="form-group">
                <label>Titulo</label>
                <input type="text" id="postTitle" placeholder="Digite o titulo da noticia" required>
            </div>
            
            <div class="form-group">
                <label>Descricao</label>
                <textarea id="postDesc" placeholder="Digite a descricao da noticia" required></textarea>
            </div>
            
            <div class="form-group">
                <label>Foto</label>
                <div class="file-input-wrapper">
                    <input type="file" id="postImage" accept="image/*" onchange="handleImageUpload(event)">
                    <label for="postImage" class="file-input-label">
                        📸 Clique para selecionar uma foto
                    </label>
                </div>
                <div id="imagePreview" style="margin-top: 12px;"></div>
            </div>
            
            <div class="form-group">
                <label>Tipo de Noticia</label>
                <select id="postType" required>
                    <option value="">Selecione um tipo</option>
                    <option value="torneio">Torneio</option>
                    <option value="clinica">Clinica Avancada</option>
                    <option value="curso">Curso</option>
                    <option value="premiacao">Premiacao</option>
                    <option value="outro">Outro</option>
                </select>
            </div>
            
            <div style="display: flex; gap: 10px; margin-top: 20px;">
                <button type="submit" class="btn-primary">Publicar</button>
                <button type="button" class="btn-secondary" onclick="closeModal()">Cancelar</button>
            </div>
        </form>
    `;
    document.getElementById('modal').classList.add('open');
}

function savePost(event) {
    event.preventDefault();
    const title = document.getElementById('postTitle').value;
    const desc = document.getElementById('postDesc').value;
    const type = document.getElementById('postType').value;
    
    alert(`Post publicado!\nTitulo: ${title}\nTipo: ${type}\n${uploadedImage ? 'Com foto' : 'Sem foto'}`);
    closeModal();
}

function editPost(id) {
    alert(`Editar post ${id}`);
}

function deletePost(id) {
    if (confirm('Tem certeza que deseja deletar este post?')) {
        alert(`Post ${id} deletado`);
    }
}

// ===== FUNÇÕES DE PRODUTOS =====
function openAddProduct() {
    uploadedImage = null;
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <h2>Criar Novo Produto</h2>
        <form onsubmit="saveProduct(event)">
            <div class="form-group">
                <label>Nome do Produto</label>
                <input type="text" id="productName" placeholder="Digite o nome do produto" required>
            </div>
            
            <div class="form-group">
                <label>Descricao</label>
                <textarea id="productDesc" placeholder="Digite a descricao do produto" required></textarea>
            </div>
            
            <div class="form-row">
                <div class="form-group">
                    <label>Preco (R$)</label>
                    <input type="number" id="productPrice" placeholder="0.00" step="0.01" required>
                </div>
                
                <div class="form-group">
                    <label>Estado</label>
                    <select id="productStatus" required>
                        <option value="">Selecione</option>
                        <option value="novo">Novo</option>
                        <option value="usado">Usado</option>
                    </select>
                </div>
            </div>
            
            <div class="form-group">
                <label>Foto do Produto</label>
                <div class="file-input-wrapper">
                    <input type="file" id="productImage" accept="image/*" onchange="handleImageUpload(event)">
                    <label for="productImage" class="file-input-label">
                        📸 Clique para selecionar uma foto
                    </label>
                </div>
                <div id="imagePreview" style="margin-top: 12px;"></div>
            </div>
            
            <div class="form-group">
                <label>Quantidade em Estoque</label>
                <input type="number" id="productStock" placeholder="0" min="0" required>
            </div>
            
            <div style="display: flex; gap: 10px; margin-top: 20px;">
                <button type="submit" class="btn-primary">Publicar Produto</button>
                <button type="button" class="btn-secondary" onclick="closeModal()">Cancelar</button>
            </div>
        </form>
    `;
    document.getElementById('modal').classList.add('open');
}

function saveProduct(event) {
    event.preventDefault();
    const name = document.getElementById('productName').value;
    const price = document.getElementById('productPrice').value;
    const status = document.getElementById('productStatus').value;
    const stock = document.getElementById('productStock').value;
    
    alert(`Produto publicado!\nNome: ${name}\nPreco: R$ ${price}\nEstado: ${status}\nEstoque: ${stock}\n${uploadedImage ? 'Com foto' : 'Sem foto'}`);
    closeModal();
}

function editProduct(id) {
    alert(`Editar produto ${id}`);
}

// ===== FUNÇÕES DE MODAL =====
function closeModal() {
    document.getElementById('modal').classList.remove('open');
    uploadedImage = null;
}

// ===== ESTILOS PARA MODAL =====
const style = document.createElement('style');
style.textContent = `
    .modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1000;
        align-items: center;
        justify-content: center;
    }
    
    .modal.open {
        display: flex;
    }
    
    .modal-content {
        background: var(--card-bg);
        border-radius: 12px;
        padding: 24px;
        max-width: 600px;
        width: 90%;
        max-height: 90vh;
        overflow-y: auto;
        position: relative;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
    }
    
    .modal-close {
        position: absolute;
        top: 12px;
        right: 12px;
        background: transparent;
        border: none;
        font-size: 24px;
        cursor: pointer;
        color: var(--text-secondary);
    }
    
    .btn-secondary {
        background: var(--border-color);
        color: var(--text-primary);
        padding: 10px 20px;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-weight: 500;
        transition: background 0.2s;
    }
    
    .btn-secondary:hover {
        background: var(--text-secondary);
    }
`;
document.head.appendChild(style);
