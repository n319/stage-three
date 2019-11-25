




using DAL.Repositories;
using DAL.Repositories.Interfaces;

namespace DAL
{
    public class UnitOfWork : IUnitOfWork
    {
        readonly ApplicationDbContext _context;

        ICustomerRepository _customers;
        IProductRepository _products;
        IOrdersRepository _orders;

        IAccountTypeRepository _accountType;

        IUserProjectRepository _userProject;
        IProjectRepository _project;
        IProjectContentTagRepository _projectContentTag;
        IViewTypeRepository _viewType;

        IProjectPieceRepository _projectPiece;
        IPieceRepository _piece;
        IPieceViewAttributeRepository _pieceViewAttribute;
        IPieceContentTagRepository _pieceContentTag;

        ICheckListItemRepository _checkListItem;
        IContentTagTypeRepository _contentTagType;
        IViewAttributeTypeRepository _viewAttributeType;

        public UnitOfWork(ApplicationDbContext context)
        {
            _context = context;
        }

        public ICustomerRepository Customers
        {
            get
            {
                if (_customers == null)
                    _customers = new CustomerRepository(_context);

                return _customers;
            }
        }



        public IProductRepository Products
        {
            get
            {
                if (_products == null)
                    _products = new ProductRepository(_context);

                return _products;
            }
        }



        public IOrdersRepository Orders
        {
            get
            {
                if (_orders == null)
                    _orders = new OrdersRepository(_context);

                return _orders;
            }
        }


        public IAccountTypeRepository AccountType
        {
            get
            {
                if (_accountType == null)
                    _accountType = new AccountTypeRepository(_context);

                return _accountType;
            }
        }

        public IUserProjectRepository UserProject
        {
            get
            {
                if (_userProject == null)
                    _userProject = new UserProjectRepository(_context);

                return _userProject;
            }
        }
        public IProjectRepository Project
        {
            get
            {
                if (_project == null)
                    _project = new ProjectRepository(_context);

                return _project;
            }
        }
        public IProjectContentTagRepository ProjectContentTag
        {
            get
            {
                if (_projectContentTag == null)
                    _projectContentTag = new ProjectContentTagRepository(_context);

                return _projectContentTag;
            }
        }
        public IViewTypeRepository ViewType
        {
            get
            {
                if (_viewType == null)
                    _viewType = new ViewTypeRepository(_context);

                return _viewType;
            }
        }

        public IProjectPieceRepository ProjectPiece
        {
            get
            {
                if (_projectPiece == null)
                    _projectPiece = new ProjectPieceRepository(_context);

                return _projectPiece;
            }
        }
        public IPieceRepository Piece
        {
            get
            {
                if (_piece == null)
                    _piece = new PieceRepository(_context);

                return _piece;
            }
        }
        public IPieceViewAttributeRepository PieceViewAttribute
        {
            get
            {
                if (_pieceViewAttribute == null)
                    _pieceViewAttribute = new PieceViewAttributeRepository(_context);

                return _pieceViewAttribute;
            }
        }
        public IPieceContentTagRepository PieceContentTag
        {
            get
            {
                if (_pieceContentTag == null)
                    _pieceContentTag = new PieceContentTagRepository(_context);

                return _pieceContentTag;
            }
        }

        public ICheckListItemRepository CheckListItem
        {
            get
            {
                if (_checkListItem == null)
                    _checkListItem = new CheckListItemRepository(_context);

                return _checkListItem;
            }
        }
        public IContentTagTypeRepository ContentTagType
        {
            get
            {
                if (_contentTagType == null)
                    _contentTagType = new ContentTagTypeRepository(_context);

                return _contentTagType;
            }
        }
        public IViewAttributeTypeRepository ViewAttributeType
        {
            get
            {
                if (_viewAttributeType == null)
                    _viewAttributeType = new ViewAttributeTypeRepository(_context);

                return _viewAttributeType;
            }
        }



        public int SaveChanges()
        {
            return _context.SaveChanges();
        }
    }
}
