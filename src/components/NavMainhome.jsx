import React from 'react';
import './NavMainhome.css'; // Make sure to style this component as needed
import { Link } from 'react-router-dom'; // For navigation links
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faCommentDots, faCog } from '@fortawesome/free-solid-svg-icons';



const NavMainhome = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                {/* Logo */}
                <Link className="navbar-brand" to="/">
                    <img
                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAMAAzAMBEQACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAgEFAwYHBAj/xABEEAABAwMBBAcFBAcFCQAAAAABAAIDBAURBhIhMUEHE1FhcYGRFCJCobEjUmLBFSQygrLR8BYzNEOiU1VjZHKTo8LS/8QAGgEBAQADAQEAAAAAAAAAAAAAAAECAwQFBv/EADARAQACAgICAQIEBAYDAAAAAAABAgMRBCESMUETUQUiMmEUcYGxQlKRoeHwFSMz/9oADAMBAAIRAxEAPwDs4RiYIHCqmCAUEopkAgEAgEAgEAgEAgEAgEAgEAgEAgEAg8oRiYIHCqpQMoJRUoBAIBAIBAIBAIBAIBAIBAIBAIBAIBB5QqxMFA4VVKBlBKKlAIBAIIyE2JQCAQCAQCAQCAQCAQCAQCAQeUIxMEDhVUoGUEoqUAgEEZCCrvV2Za4GOwHyvcNlnMjn8ly8rkRgjfuWF7xSHtoqqKsp2TwODmO+S24slctYvVlWdxt6FtUIBAIBAIBAIBAIBAIBAIPKFWJgoHCqpQSoGRUoIygC4DjuQUF31RR0YdHTuFRPww39keJ/kuPNzKY+o7lqtlivpptXWzVtQ6eodtPPy7gvGy3tkt5Wc02mZ3K60jcTT1vssh+yn4dzl1cHNNL+E+pbcV9TqW75XtulKAQCAQCAQCAQCAQCAQCDyhGJgUDAqqYIJUE5QJPUw00TpaiRkcbeLnHAUmYj2TMR7ardNb00Zcy2xGd333e63+ZXHk5cR+hz25MR1VqtwvdfcjiqqHGP/ZM91voOPnlcOTLfJ+qXPbLa3t5GnHh2LRpgyNcsZhltlimdE9skZw9jg5viN6ndZ3DKJ1Lq1PIJoY5W8HtDh5jK+jpO4iXoR3G2VZAQCAQCAQCAQCAQCAQCDyBGOzBAwQOFVGcKCh1JqilsreqaBNWOHuxg7m97jyC05c0U/m05c9cf83Objd6y6zdbWzF+/wB1g3Nb4Befe1r+3BfJa/cvM1y1aY7O1ymjbIHcgsdMoOHLHSsjXLGYV1OwEmyW8nj7NH/CF7mD/wCdf5PSpP5YWC3MggEAgEAgEAgEAgEAgEHkBRgYFFMCgbKqtc1lqVtkpRDTlprph9mDvDB94/kOa05cnjH7ufPmjHX93K5JpJ5XyzPc+R5y5zjkkrgnvuXmeW53KQ5Y6WJZA5YzC7O139dqmlWM9O63wYqB+tTN3R84mdp73dnIZ7d2VqeMd+2y0eEd+3lDlq0xMH4GcZ7gsdLDsVtgNNQU1OeMULGHyAC9vHHjWIepWNREPSs2QQCAQCAQCAQCAQCAQCDxBVgcIpgoMdXVRUVJNVTuDYoWF73HkAEmdQlrRWPKfhw67XOa7XGaunOHSu3N+43kFw3nynbxL5JyWm0vOHrXpjtka9NLtc2bT90u+HUlO5sJ/wA6X3WeWd58gVa4r2+HRjw3v6hbVD7XprMVG9tfdQMOmOOrg8B2/wBdyyt44+o7ltnww9R3LXZJ5JpXSzPc+R5y5zjvJXPO5ncueZ3O5SHLDS7XWlbe65XmBmPsoiJZD2AcB5n81tw4/K/7N2Cnlb9nWAvVemlAIBAIBAIBAIBAIBAIBB4gUazBVTBRWn9KdeabT0dMw4NXO1jv+hoLj8w0ea15Z6cfNvNccR93KWuXLp5bIwlzmtY0uc4gADiT2BNLDo9i0vRWSgN21KWF7RtdS7e2PsGPid3LfXHFY8rPRxYKYq+eRR6g1lWXUuhpHOpKIbmsYcOcO8jl3BacmWbdQ05eVa/Veoa612Bu3dy0aaNsocmjb222iqblVspqOIvkd6NHaTyClcc2nUNlK2vOodZ09ZYLLRiGP35Xb5JObj/JehixxSNPVxY4xxqFutrYEAgEAgEAgEAgEAgEAghB4GlGtkBVUwxzRk5z0wOI/Q7eX2x/gXPl9w878Q9Vc6BWp5roHRZZW1NVLdaiMObTu6uAEbtrm7yG71W3FTfb0OFiiZ85VuvtQPu15kpoZCaKkeY2gHc543Od67h4LDJbctfKzTe3jHqGttdzWrTm9sjC57g1oJc44a0DJPgpo73qG3WDRFxuGzLW5o6c7/fHvuHcOXmtlcM29u3Fxb27t06RZ7RRWinENDCGA42nne557Sea6aUisdPRx46441CxWbMIBAIBAIBAIBAIBAIBBBQQiK8FGDICgYd6LHtz7piiPstqnHBkskZ8SAf/AFK1ZI9ODnx+WsuZh27eVql5unZNMH9E9HIqoxiRtLLP+9vx9At1eqPYwfk4+/2cfY7DQPVczx4+7ZdJaWq9QyGQPMFEw4fNjJJ7Gg8T9FnXH5Onj8e2WftH3dWsmm7XZGD2GmHWke9NJ70h8/yG5b60iPT1ceCmOPywuFm2pRUoBAIBAIBAIBAIBAIAoIQQiAoK4IwO0oMgKK1TpPova9JTSMBLqSVlQPAZa7/S4lYZI3Dm5dfLFLjQPLOVp+HkfZ2W3frfRaAzibfIN3dn+S3f4HsU748fycntdJLc6+mooP72okDAezPE+QyfJc8RudPIx0nJaKx8voC2UEFsoIKKkbsQwM2QO3vPeeK6ojUPfpWK1isNV1pruGxyOoLfG2prvjc4+5D49p7vUrC99dQ5s/Krj6r3LSWX/WN4cZKWWvlb2UkRDR6BavK0+nFGXk5O4/2eim1hqa0TBlbJJIRxirI8E+eAQnnePaxyc2L9TpWmNSUuoabrIAYp2f3sDjks788x3rdS8Wh6OHNXLHXteEjCzb2n6k1rFb5n0duY2eoZufIf2GHs7yufLn8equTLyorOqQ1tl31NciZIJK17f+XiIHyC5Zvmt6aPqZrdssd/1BbXj2mScfhqY+PqsfrZqfqZRly09tx09qOG7gxPaIaoDPV5yHDtC7MPIjJ1Pt1480X6Xhe1rC5xAaBkk8AFvmdRttajdNVPdI6K2hoYN3WuGS7wHYvJ5HPtvWP192i2b4h42Vl6lHWB9YW/ea07P0XJOTlz3G/+/wBGPld7aHUVXDIG1Y62PgcjDgssX4jlxzrJ3H9mdbzHttNNUR1MTZYXBzHcCvcx5K5K+VZbYnbNlbFQiIQBQVoKMDgoHBQJU08dZSzU07dqKZjmPb2gjCT6S0eUTD57uVFLa7hUUM+RJTyFhz8Q5HzG9c+tS8S9Jpaay6t0U1jKvTU1FKQ408rmOb+Fwz+a2Y/Wnp8Od4vGWq6Htxt3SF7BUD7SkdK1ueeB7p8wQfNYUj87l49PHkeM/DqWormLPY62v5wxEtHa7l+S3WnUPSyW8KTZxnSUFBc766bUVdBDTtzNK6eUM65xO5oye3efBaI1M9vKwRXJfeSXX4dR6ahibHDerWyNow1ralgAHqtsZMcfL1fq4ta3DzXW6aSu1I+nr7ta5GFu4mpZlp7Qc7lJtjn5YXvhvGrTDmljrf7PanjfT1UdRTsm6p00bgWSRk4zu7sHyWis+NunmY7/AEsvU9OqaxurrRYZ5onYmeRHGewnn5Bb8tvGu3qcjJ4UmYaVoDT8d2nlra0bdNA/ZDXfG/GTnuAI9VzYsUX7s4+NijJPlb4dQjY2Nuyxoa0DAAG4LsiHpdEqqaGridDURNkjcMFrhkKTWLdSTET7a9bNIw0Nz9r9oe5jHZhjG7Z8TzXNTi1pfyaKYIrby2Nb176eijpIyQ6cnaP4QtfNyTFYpHyue+o1DBo+zxyU7a+paHZJ6pp3gAHGVq4XGrP/ALLf0TDj63LbV6evh0Km+WplZTuljaG1DBkED9ruK4Obw65qTMe4YWrE9qvStW5lUaYn3JGlzR2Ef18lwfheeYyTSfU/3Y0n4bUvfbEIAoIVFWCo1sgKKcFA7Sg5/wBKenXT0wvdIzMkDcVLW82cneXPuWvJHzDj5eKJjzhqfR7fm2S/s9oeGUtUBFKeTTn3T4A/VYVnUubi5Pp379S6Fqi1mjv1v1PSt/w7gyta3nFw2v3c7+4dy2WjWph3Zcerxkhn6TGvl0XW9Xvw6N5x2B4z8lbd1ZcrvDOnN9GaWbqc1jRW+zyU2wdnYztB2f8A5K1Vr5POwceM2+/TaB0Uu/3sP+0svpOj+Aj/ADGHRY7ldv8AxKfSk/8AHx/mKejISdZE28MLmghwEe9ufPcsZw7+T+BievJbdKbZP0JREHIZUDbP7pH1VzRqrZzd+Efzejoumjfp2SNmNqOpeHDxAI+X0VwfpZcOY+n03HK3OsZQRlBo/SAHe3Ubt+z1bh8wvM52/Orl5HuGy6bkY+w0JjxuhDTjtG4/PK7ONO8NW7F+iFplb2wrnAMJO4YUn0NKsPv32Is4bbz5bLv5r5rhRvl11+/9paafqbqvpm4IIJVEEoisBUYGBQOCinBQNucMOAIO4g8wh+zkeutEyWp8twtcW3b3b3xNG+Dtx+H6eC02pr087kcfW7VX/Rvq9lXTR2W6y/bsbswSPO6Vn3T3jh3hZUtvqW7i8jyjwt7bxV26nqrZLbZG/q0kRiLfujhgeH5LZMbh2TXddOL0FTXaE1Q5ssRc6P3JGHcJojvBHoCO8LREzWXk0mePldZtmr7FcYWyQ3CKNxGTHKdlzfEFbYvWXpUz47x1Lw37X1otsDm0cza2qxhkcZ90H8R5KWvENeXl46dRO5aVoenul81SbkamZuzJ1lTOwlod2M8DuGOxa6RNrbcXGi+XL57dQ1Fa2Xmzz0LyA54zG4/C4bx81ttXyjT08tIyU8XK9P3as0neJoqiJwGQyphO4nsI8OXiuWkzjl5eHJbBbUunW/VFmrow+OujYebZDskeq6YyVnvb0658do3thumrrTQxksqW1EuPdjhOc+JWF89Kwls9Kx7UWmdQ3i43lzDsS08h2ntIwIW9x/rK58OXJa7ThzZLX/ZsGrLU+523ahGaiA7bB29oW3k4vqU69t+anlXr21nTGoP0WXUtUHGnLs8N8bue5cXH5H0vy29NGLL49S3Nl6tr2bba2LZ8V6EZ8Wt+Tq86qO+6hjmhdS0DiQ/c+Xhu7AvO5nNi1Zx42q+XrUM+lKFzGGtlbgvGzHns5n6LL8N43jvLPyzx163LYsr1mxBKCCVERlBVgqNZwqpwUDAopwUDcdx4FBoup+jqmrZHVlieKOpLtow/5Tj2jH7J+S1zT5hyZeLFu6dS89q1jddOubQaxo5yxu5la1u0cfixud4jf3c0i+vZTPfH1lj+rYK6LTGtaNrXVUM7mj7OWKQNliz4/QjCs+Nm28Ys8a21eboomLyaO7xvj+ETQEEeYJysfCfu5rcDc9WZ6Powpqd4ku93HVDeWQsDM/vOJ+in04+ZK8Gsfqn/AEbxZG2+np2UtnhaKWPI24x7mfH4j6rdGtdO6kVrGqwtFWxUX7TduvrB7ZG4TNGGTxnZe38iO45WF8db+2nJhpk/U1Obo3ma8+z3OJ7P+LEQR6E/ktE8bfy5f4L7T/t/y9NF0dgOBrbiSwfBDFgnzJP0Uji/eWVeHr3LcbdbaS2U4goohGwcTxLu8nmuilK0jVXZSlaRqsPUBhZMlLd9M0VyeZgXU9QeMkY3O8Rz+S5svFpk79S03xVt2pv7GVAf/jYXDtMZB9N65J/DZ+8f6f8ALCMH7rO3aXpaaQPqZXVDxwbs7LPTO9bcP4fSk+Vp2zriiq+4AAAADgu9tCCCggoIQVYKjXs4KBgVVOCgYFFMCgcFBErI5oyyVjHsPwuGQhPakrNH6cq39ZLa4GyH44ssd6hY+Fd701zhx2+GJmjbNGfdfXtHY2vmA/iU+nC/Rp/2XsprBZqfZIpetc3eHTvMp/1ErLxhYx1j4WwmY3cMBo3ADkq2D2mPtQT7TH95Nm0+0x9qp0nr2HgVBIlbniim229qIna70EbSAygEEIIyggom0ZVNqlrsrFrZAUDgopsqqYFBO0gC4oEdIQisMkzhwUHllqXhB4pq+UcMpseCa7Tt3b1Njxy36oacbLlNoxf2hqc/sOTYzxXyodxaU2r3Q3Sc44qxIsIa+V3HKqvdFVPPag9UcziqbehshKG2UOyhtOVTYyhtBcoIyiFygqQUazhyinBQOCimBVU2UE4CA2MoFMIPFFY3UgPFBifbmO+EJoYnWmM8h6KaGI2SIn9keimgfoOH7g9E0GbZYh8I9FdDKy0xt5JpXoZbmt4BUZm0rRyQZGwgKjIGgKCRuVBlBBKiIygguQRlBUgo1HBRTgqKcFCDAopgVQ2UUwKBgUE5RTAoJygnKAygkFAZQTlBGUBlBGUBlBGUEEoIJQQSgjKIp2uUa2QFUOCinDlFMHIHBRYMCqGygnKKYFBOUE5QTlFAKCcoDKCcoIygMoDKCMoDKCCURGUCkoIygpgVGpka5FOCqMgKKYOUDhyKdrkDZRQCgfKonKCcooBQTlBOUBlAZQGUBlBGUBlBGUEEoIJQQSiFyoKRrka2VrkVka5A7XKhwUDAopg5QOHIpgUEgopsoJyUNpBVVOUQZRRlAZQGUBtIgygMoILtygjJQQSgXKJKC5B//9k=" // Replace with your logo URL
                        alt="EcoAware Logo"
                        style={{ width: '30px', marginRight: '10px' }}
                    />
                    EcoAware
                </Link>

                {/* Navbar Toggler for smaller screens */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar links */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {/* Profile Link */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/profile">
                                <FontAwesomeIcon icon={faUserCircle} className="nav-icon" /> Profile
                            </Link>
                        </li>

                        {/* Feedback Link */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/feedback">
                                <FontAwesomeIcon icon={faCommentDots} className="nav-icon" /> Feedback
                            </Link>
                        </li>

                        {/* Settings Link */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/settings">
                                <FontAwesomeIcon icon={faCog} className="nav-icon" /> Settings
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavMainhome;
