using DAL.Repositories.Interfaces;

namespace DAL
{
    public interface IUnitOfWork
    {
        ICustomerRepository Customers { get; }
        IProductRepository Products { get; }
        IOrdersRepository Orders { get; }

        IAccountTypeRepository AccountType { get; }

        IUserProjectRepository UserProject { get; }
        IProjectRepository Project { get; }
        IProjectContentTagRepository ProjectContentTag { get; }
        IViewTypeRepository ViewType { get; }

        IProjectPieceRepository ProjectPiece { get; }
        IPieceRepository Piece { get; }
        IPieceViewAttributeRepository PieceViewAttribute { get; }
        IPieceContentTagRepository PieceContentTag { get; }

        ICheckListItemRepository CheckListItem { get; }
        IContentTagTypeRepository ContentTagType { get; }
        IViewAttributeTypeRepository ViewAttributeType { get; }


        int SaveChanges();
    }
}
