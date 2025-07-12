from sqlmodel import create_engine, Session, SQLModel

DATABASE_URL = "sqlite:///test.db"

engine = create_engine(DATABASE_URL, echo=True)

def get_session():
    return Session(engine)
    