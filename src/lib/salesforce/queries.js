/**
 * SOQL queries and endpoints for fetching CMS content, leads, and forms
 */
export const QUERIES = {
  getTestimonials: `SELECT Id, Name, Quote__c, Author__c, Company__c, Rating__c FROM Testimonial__c ORDER BY CreatedDate DESC`,
  getServices: `SELECT Id, Title__c, Subtitle__c, Description__c, Category__c FROM Service__c`,
  getBlogs: `SELECT Id, Title__c, Slug__c, Summary__c, PublishedDate__c FROM Blog__c ORDER BY PublishedDate__c DESC LIMIT 10`,
};
