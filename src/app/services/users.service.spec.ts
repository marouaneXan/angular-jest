import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;
  let httpMock: HttpTestingController


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsersService]
    });
    service = TestBed.inject(UsersService);
    httpMock = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('get list of users', () => {
    const usersData = [
      {
        "id": 1,
        "username": "tes 1",
        "lastname": "test 1",
        "age": "test 1"
      },
      {
        "id": 2,
        "username": "tes 2",
        "lastname": "test 2",
        "age": "test 2"
      }
    ]
    service.getUsers().subscribe(users => {
      expect(users).toEqual(usersData)
    })
    const req = httpMock.expectOne('http://localhost:3000/users')
    expect(req.request.method).toBe('GET')
    req.flush(usersData);
  })

  it('add new user',()=>{
    let newUser=[
      {
        "id": 1,
        "username": "tes 3",
        "lastname": "test 3",
        "age": "test 3"
      }
    ]
    service.addUser(newUser).subscribe(user=>{
      expect(user).toEqual(newUser)
    })

    const req = httpMock.expectOne('http://localhost:3000/users')
    expect(req.request.method).toBe('POST')
    expect(req.request.body).toEqual(newUser)
    req.flush(newUser);

  })

  afterEach(() => {
    httpMock.verify()
  })

});
