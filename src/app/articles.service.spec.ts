import { TestBed, fakeAsync, tick } from '@angular/core/testing';

import { ArticlesService, articles } from './articles.service';

describe('ArticlesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArticlesService = TestBed.get(ArticlesService);
    expect(service).toBeTruthy();
  });

  it('should return articles', fakeAsync(() => {
    const service: ArticlesService = TestBed.get(ArticlesService);
    service.articles$.subscribe(data => {
      expect(data.length).toBe(articles.length);
      expect(data[0]).toBe(articles[0]);
    });
    tick(2000);
  }));

  it('should createArticle article', fakeAsync(() => {
    const service: ArticlesService = TestBed.get(ArticlesService);
    service
      .createArticle$({
        title: 'title',
        text: 'text'
      })
      .subscribe(newArticle => {
        service.articles$.subscribe(data => {
          const article = data.find(d => d.id === newArticle.id);
          expect(article).toBeDefined();
        });
      });
    tick(4000);
  }));

  it('should remove article', fakeAsync(() => {
    const service: ArticlesService = TestBed.get(ArticlesService);
    const id = articles[0].id;
    service.removeArticle(id);
    service.articles$.subscribe(data => {
      const article = data.find(d => d.id === id);
      expect(article).toBeUndefined();
    });
    tick(2000);
  }));
});
